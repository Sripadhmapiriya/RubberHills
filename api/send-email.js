import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

/**
 * Escapes characters that have special meaning in HTML to prevent HTML injection.
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Strips control characters (newlines, carriage returns, null bytes) to prevent email header injection.
 */
function sanitizeHeader(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[\r\n\0\x08\x09\x1a]/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Whitelist of accepted programme options.
 */
const ALLOWED_CLASSES = ['Creche', 'Nursery', 'LKG', 'UKG'];

function getLogoAttachment() {
  const possiblePaths = [
    path.join(process.cwd(), 'public', 'assets', 'logo.jpg'),
    path.join(process.cwd(), 'public', 'original', 'school-logo.jpg'),
    path.join(process.cwd(), 'rubber-hills-react', 'public', 'assets', 'logo.jpg'),
    path.resolve('public/assets/logo.jpg'),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      try {
        return {
          filename: 'rubber-hills-logo.jpg',
          content: fs.readFileSync(p),
          cid: 'schoollogo',
        };
      } catch (e) {
        // Silently continue if cannot read
      }
    }
  }
  return null;
}

/**
 * Persistent rate limiter using Upstash Redis REST API (suitable for serverless).
 * If Redis environment variables are not configured, logs diagnostic status and allows the request.
 */
async function checkPersistentRateLimit(clientIp) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (!redisUrl || !redisToken) {
    // Persistent rate limit store is pending environment variable configuration in Vercel.
    return { allowed: true, pendingConfiguration: true };
  }

  try {
    const key = `ratelimit:enquiry:${clientIp || 'unknown'}`;
    const windowSeconds = 3600; // 1 hour window
    const maxSubmissions = 5; // Max 5 submissions per hour per IP

    // INCR key in Redis
    const incrRes = await fetch(`${redisUrl}/incr/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${redisToken}` },
    });
    const incrData = await incrRes.json();
    const count = incrData?.result || 1;

    // Set expiration on first hit
    if (count === 1) {
      await fetch(`${redisUrl}/expire/${encodeURIComponent(key)}/${windowSeconds}`, {
        headers: { Authorization: `Bearer ${redisToken}` },
      });
    }

    if (count > maxSubmissions) {
      return { allowed: false, count };
    }
    return { allowed: true, count };
  } catch (err) {
    console.error('[RateLimit Error] Failed to query persistent rate limiter:', err.message);
    // Fail safe to not block legitimate parents if Redis service is unreachable
    return { allowed: true, error: true };
  }
}

/**
 * Optional CAPTCHA verification (Cloudflare Turnstile or Google reCAPTCHA).
 * Only verifies if CAPTCHA_SECRET_KEY is configured in environment variables.
 */
async function verifyCaptcha(token, clientIp) {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return { verified: true, pendingConfiguration: true };
  }

  if (!token) {
    return { verified: false, reason: 'CAPTCHA token is required.' };
  }

  try {
    const params = new URLSearchParams();
    params.append('secret', secretKey);
    params.append('response', token);
    if (clientIp) params.append('remoteip', clientIp);

    const verifyUrl = process.env.CAPTCHA_VERIFY_URL || 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const verifyRes = await fetch(verifyUrl, {
      method: 'POST',
      body: params,
    });
    const verifyData = await verifyRes.json();
    return { verified: Boolean(verifyData?.success) };
  } catch (err) {
    console.error('[CAPTCHA Error] Verification request failed:', err.message);
    return { verified: false, reason: 'Verification failed.' };
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    return;
  }

  // Determine client IP for abuse detection and rate limiting
  const forwardedFor = req.headers['x-forwarded-for'];
  const clientIp = typeof forwardedFor === 'string'
    ? forwardedFor.split(',')[0].trim()
    : req.socket?.remoteAddress || '127.0.0.1';

  // Persistent Serverless Rate Limiting Check
  const rateLimitStatus = await checkPersistentRateLimit(clientIp);
  if (!rateLimitStatus.allowed) {
    res.statusCode = 429;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        message: 'Too many enquiry submissions from this IP address. Please try again later or contact the school directly.',
      })
    );
    return;
  }

  // Parse and enforce server-side request size limit (max 10 KB)
  const MAX_PAYLOAD_BYTES = 10 * 1024;
  let body = req.body;

  try {
    if (typeof body === 'string') {
      if (Buffer.byteLength(body, 'utf8') > MAX_PAYLOAD_BYTES) {
        res.statusCode = 413;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Payload Too Large' }));
        return;
      }
      try {
        body = JSON.parse(body);
      } catch (e) {
        // Handled below
      }
    } else if (!body) {
      body = await new Promise((resolve, reject) => {
        let data = '';
        let totalBytes = 0;
        req.on('data', (chunk) => {
          totalBytes += chunk.length;
          if (totalBytes > MAX_PAYLOAD_BYTES) {
            req.destroy();
            reject(new Error('PAYLOAD_TOO_LARGE'));
            return;
          }
          data += chunk;
        });
        req.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (err) {
            resolve({});
          }
        });
        req.on('error', (err) => reject(err));
      });
    }
  } catch (err) {
    if (err.message === 'PAYLOAD_TOO_LARGE') {
      res.statusCode = 413;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Payload Too Large' }));
      return;
    }
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Invalid request body.' }));
    return;
  }

  try {
    const {
      parentVisitorName,
      contactNumber,
      childName,
      interestedClass,
      message,
      name,
      phone,
      privacyConsent,
      website, // Honeypot field
      submitTime, // Timestamp for fast-submit detection
      captchaToken,
    } = body || {};

    // 1. Honeypot check: If filled, silently return fake success to trick spambots
    if (website && typeof website === 'string' && website.trim().length > 0) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: true, message: 'Enquiry sent successfully.' }));
      return;
    }

    // 2. Fast-submission heuristic: Bots submit forms instantaneously (< 1.5 seconds)
    if (submitTime && Number(submitTime)) {
      const elapsed = Date.now() - Number(submitTime);
      if (elapsed > 0 && elapsed < 1500) {
        // Silently drop bot submission
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: true, message: 'Enquiry sent successfully.' }));
        return;
      }
    }

    // 3. CAPTCHA verification (if configured in environment)
    const captchaResult = await verifyCaptcha(captchaToken, clientIp);
    if (!captchaResult.verified) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Security check failed. Please refresh and try again.' }));
      return;
    }

    // 4. Input Sanitization & Field Length Limits
    const rawParent = String(parentVisitorName || name || '').trim();
    const rawContact = String(contactNumber || phone || '').trim();
    const rawChild = String(childName || '').trim();
    const rawClass = String(interestedClass || '').trim();
    const rawNotes = String(message || '').trim();

    // Validate Parent Name
    if (!rawParent || rawParent.length < 2 || rawParent.length > 100) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Parent / Visitor Name is required (2–100 characters).' }));
      return;
    }

    // Validate Child Name
    if (!rawChild || rawChild.length < 2 || rawChild.length > 100) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Child’s Name is required (2–100 characters).' }));
      return;
    }

    // Validate Contact Number (10 to 15 digits)
    const digitsOnly = rawContact.replace(/\D/g, '');
    if (!rawContact || digitsOnly.length < 10 || digitsOnly.length > 15) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({ message: 'A valid Contact Number (10–15 digits) is required.' })
      );
      return;
    }

    // Validate Interested Class against whitelist
    let selectedClass = 'Nursery';
    if (ALLOWED_CLASSES.includes(rawClass)) {
      selectedClass = rawClass;
    } else {
      const match = ALLOWED_CLASSES.find(
        (cls) => cls.toLowerCase() === rawClass.toLowerCase()
      );
      if (match) selectedClass = match;
    }

    // Validate Message Length (max 1000 characters)
    if (rawNotes.length > 1000) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Message cannot exceed 1000 characters.' }));
      return;
    }

    // Validate Privacy Consent
    if (privacyConsent !== true && privacyConsent !== 'true') {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          message: 'You must consent to our Privacy Policy to submit an enquiry.',
        })
      );
      return;
    }

    // 5. Strict SMTP Configuration Verification (No hardcoded fallback secret)
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : null;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || user;

    if (!user || !pass) {
      console.error(
        '[Configuration Error] SMTP credentials missing: SMTP_USER or SMTP_PASS environment variable is not defined.'
      );
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          error: 'Email service configuration error. Please contact the school directly.',
        })
      );
      return;
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const submissionDateTime = new Date().toLocaleString('en-IN', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'Asia/Kolkata',
    });

    const logoAttachment = getLogoAttachment();
    const attachments = logoAttachment ? [logoAttachment] : [];

    // Header injection prevention: sanitize header strings
    const safeParentHeader = sanitizeHeader(rawParent);
    const safeChildHeader = sanitizeHeader(rawChild);
    const safeClassHeader = sanitizeHeader(selectedClass);

    // HTML injection prevention: escape all interpolated variables
    const escParent = escapeHtml(rawParent);
    const escContact = escapeHtml(rawContact);
    const escChild = escapeHtml(rawChild);
    const escClass = escapeHtml(selectedClass);
    const escNotes = escapeHtml(rawNotes);
    const escDateTime = escapeHtml(submissionDateTime);
    const telDigits = encodeURIComponent(rawContact.replace(/[^\d+]/g, ''));

    const mailOptions = {
      from: `"Rubber Hills Kindergarten" <${user}>`,
      to: receiver,
      replyTo: user,
      subject: `New Admission Enquiry: ${safeParentHeader} (Child: ${safeChildHeader} - ${safeClassHeader})`,
      text: `New Admission Enquiry\nRubber Hills Kindergarten\n\nParent / Visitor Name: ${rawParent}\nContact Number: ${rawContact}\nChild's Name: ${rawChild}\nInterested Class: ${selectedClass}\n${rawNotes ? `Message / Notes: ${rawNotes}\n` : ''}Privacy Consent: Granted\nSubmission Date & Time: ${submissionDateTime}\n\nSent from the Rubber Hills Kindergarten official website enquiry form.`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Admission Enquiry</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #F4F7EC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E3A2B;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border-radius: 18px; border: 2px solid #D0E0BE; overflow: hidden; box-shadow: 0 4px 16px rgba(30, 58, 43, 0.08);">
    <!-- School Header Branding -->
    <tr>
      <td style="padding: 32px 24px 20px 24px; text-align: center; background: linear-gradient(180deg, #DCEBCB 0%, #FFFFFF 100%);">
        ${logoAttachment
          ? `<img src="cid:schoollogo" alt="Rubber Hills Kindergarten Logo" width="88" height="88" style="display: block; margin: 0 auto 14px auto; width: 88px; height: 88px; border-radius: 50%; border: 3px solid #F2B632; object-fit: cover; background: #FFFFFF;" />`
          : ''
        }
        <h1 style="margin: 0; font-size: 24px; color: #1E3A2B; font-weight: 700; letter-spacing: -0.3px;">Rubber Hills Kindergarten</h1>
        <div style="display: inline-block; margin-top: 8px; padding: 4px 16px; background-color: #2F7D4F; color: #FFFFFF; border-radius: 999px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;">
          New Admission Enquiry
        </div>
      </td>
    </tr>

    <!-- Enquiry Details Table -->
    <tr>
      <td style="padding: 10px 28px 24px 28px;">
        <p style="margin: 0 0 18px 0; font-size: 15px; color: #4F6656; line-height: 1.5;">
          A new admission enquiry has been submitted through the website. Here are the details:
        </p>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid #D0E0BE; border-radius: 12px; overflow: hidden;">
          <tr style="background-color: #FBFDF6; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656; width: 40%;">Parent / Visitor Name</td>
            <td style="padding: 14px 18px; font-weight: 700; font-size: 15px; color: #1E3A2B;">${escParent}</td>
          </tr>
          <tr style="background-color: #FFFFFF; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Contact Number</td>
            <td style="padding: 14px 18px; font-weight: 700; font-size: 16px;">
              <a href="tel:${telDigits}" style="color: #2F7D4F; text-decoration: none; font-weight: 700;">${escContact}</a>
            </td>
          </tr>
          <tr style="background-color: #FBFDF6; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Child’s Name</td>
            <td style="padding: 14px 18px; font-weight: 700; font-size: 15px; color: #1E3A2B;">${escChild}</td>
          </tr>
          <tr style="background-color: #FFFFFF; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Interested Program / Class</td>
            <td style="padding: 14px 18px; font-weight: 700; font-size: 15px; color: #2F7D4F;">${escClass}</td>
          </tr>
          ${rawNotes
          ? `
          <tr style="background-color: #FBFDF6; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656; vertical-align: top;">Message / Notes</td>
            <td style="padding: 14px 18px; font-size: 14px; color: #1E3A2B; line-height: 1.5;">${escNotes}</td>
          </tr>
          `
          : ''
        }
          <tr style="background-color: #FFFFFF; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Privacy Consent</td>
            <td style="padding: 14px 18px; font-size: 14px; color: #2F7D4F; font-weight: 600;">Granted (Accepted Website Privacy Policy)</td>
          </tr>
          <tr style="background-color: #FBFDF6;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Submission Date & Time</td>
            <td style="padding: 14px 18px; font-size: 13px; color: #4F6656;">${escDateTime}</td>
          </tr>
        </table>

        <!-- Direct Action Button -->
        <div style="text-align: center; margin: 26px 0 10px 0;">
          <a href="tel:${telDigits}" style="display: inline-block; background-color: #2F7D4F; color: #FFFFFF; font-size: 15px; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 999px; box-shadow: 0 4px 12px rgba(47, 125, 79, 0.25);">
            Call Parent Now (${escContact})
          </a>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 18px 24px; background-color: #F4F7EC; border-top: 1px solid #D0E0BE; text-align: center; font-size: 12px; color: #4F6656; line-height: 1.5;">
        <strong>Rubber Hills Kindergarten</strong> · Part of the Rubber Hills Group<br>
        RH Group, Punnathanam, Manjalumoodu – Malaicode Road<br>
        <span style="color: #8A5A33;">This is an automated notification from your website's Visit Us enquiry form.</span>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, message: 'Enquiry sent successfully.' }));
  } catch (error) {
    // Technical errors are logged server-side without leaking internal exception or credentials to client
    console.error('[SMTP Send Error] Code/Name:', error.code || error.name || 'UNKNOWN');
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        error: 'Unable to deliver enquiry at this time. Please contact the school directly.',
      })
    );
  }
}
