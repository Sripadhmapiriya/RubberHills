import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

function getLogoAttachment() {
  const possiblePaths = [
    path.join(process.cwd(), 'public', 'assets', 'logo.jpg'),
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
        console.error('Error reading logo file:', e);
      }
    }
  }
  return null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    return;
  }

  // Ensure environment variables are loaded in local environments
  if (!process.env.SMTP_USER) {
    try {
      const dotenv = await import('dotenv');
      dotenv.config();
    } catch (e) {
      // Ignore if dotenv is already loaded or in production
    }
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // keep as is
      }
    } else if (!body) {
      body = await new Promise((resolve) => {
        let data = '';
        req.on('data', (chunk) => {
          data += chunk;
        });
        req.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (err) {
            resolve({});
          }
        });
      });
    }

    const { parentVisitorName, contactNumber, childName, name, phone } = body || {};

    const parent = (parentVisitorName || name || '').trim();
    const contact = (contactNumber || phone || '').trim();
    const child = (childName || '').trim();

    // Server-side validation
    if (!parent) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Parent / Visitor Name is required.' }));
      return;
    }

    const digitsOnly = contact.replace(/\D/g, '');
    if (!contact || digitsOnly.length < 10 || digitsOnly.length > 15) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'A valid Contact Number (at least 10 digits) is required.' }));
      return;
    }

    if (!child) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Child’s Name is required.' }));
      return;
    }

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || user;

    if (!user || !pass) {
      throw new Error('SMTP credentials are not configured in environment variables.');
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

    const mailOptions = {
      from: `"Rubber Hills Kindergarten" <${user}>`,
      to: receiver,
      replyTo: user,
      subject: `New Admission Enquiry: ${parent} (Child: ${child})`,
      text: `New Admission Enquiry\nRubber Hills Kindergarten\n\nParent / Visitor Name: ${parent}\nContact Number: ${contact}\nChild's Name: ${child}\nSubmission Date & Time: ${submissionDateTime}\n\nSent from the Rubber Hills Kindergarten official website enquiry form.`,
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
        ${
          logoAttachment
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
            <td style="padding: 14px 18px; font-weight: 700; font-size: 15px; color: #1E3A2B;">${parent}</td>
          </tr>
          <tr style="background-color: #FFFFFF; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Contact Number</td>
            <td style="padding: 14px 18px; font-weight: 700; font-size: 16px;">
              <a href="tel:${contact}" style="color: #2F7D4F; text-decoration: none; font-weight: 700;">${contact}</a>
            </td>
          </tr>
          <tr style="background-color: #FBFDF6; border-bottom: 1px solid #D0E0BE;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Child’s Name</td>
            <td style="padding: 14px 18px; font-weight: 700; font-size: 15px; color: #1E3A2B;">${child}</td>
          </tr>
          <tr style="background-color: #FFFFFF;">
            <td style="padding: 14px 18px; font-weight: 600; font-size: 14px; color: #4F6656;">Submission Date & Time</td>
            <td style="padding: 14px 18px; font-size: 13px; color: #4F6656;">${submissionDateTime}</td>
          </tr>
        </table>

        <!-- Direct Action Button -->
        <div style="text-align: center; margin: 26px 0 10px 0;">
          <a href="tel:${contact}" style="display: inline-block; background-color: #2F7D4F; color: #FFFFFF; font-size: 15px; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 999px; box-shadow: 0 4px 12px rgba(47, 125, 79, 0.25);">
            Call Parent Now (${contact})
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
    console.error('SMTP Error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: error.message || 'Failed to send enquiry.' }));
  }
}
