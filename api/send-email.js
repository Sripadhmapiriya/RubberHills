import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    return;
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

    const { name, phone, age } = body || {};

    if (!name || !phone) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Please provide both parent name and phone number.' }));
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

    const mailOptions = {
      from: `"Rubber Hills Kindergarten" <${user}>`,
      to: receiver,
      replyTo: user,
      subject: `New Call / Visit Request: ${name}`,
      text: `New Call / Visit Request:\n\nParent Name: ${name}\nPhone Number: ${phone}\nChild's Age: ${age || 'Not specified'}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #1E3A2B; background-color: #F4F7EC; border-radius: 12px; max-width: 560px; margin: 0 auto; border: 2px solid #D0E0BE;">
          <h2 style="color: #2F7D4F; margin-top: 0; font-size: 22px;">New Visit / Call Request</h2>
          <p style="font-size: 15px; margin-bottom: 20px;">A parent has requested a call through the <strong>Rubber Hills Kindergarten</strong> website:</p>
          <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <tr style="border-bottom: 1px solid #D0E0BE;">
              <td style="padding: 14px 18px; font-weight: bold; width: 140px; color: #4F6656;">Parent Name:</td>
              <td style="padding: 14px 18px; color: #1E3A2B; font-size: 16px;"><strong>${name}</strong></td>
            </tr>
            <tr style="border-bottom: 1px solid #D0E0BE;">
              <td style="padding: 14px 18px; font-weight: bold; color: #4F6656;">Phone Number:</td>
              <td style="padding: 14px 18px;"><a href="tel:${phone}" style="color: #2F7D4F; text-decoration: none; font-weight: bold; font-size: 16px;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; font-weight: bold; color: #4F6656;">Child’s Age:</td>
              <td style="padding: 14px 18px; color: #1E3A2B; font-size: 15px;">${age || 'Not specified'}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #7A4E2B; border-top: 1px dashed #D0E0BE; padding-top: 12px;">
            Rubber Hills Kindergarten · Part of the Rubber Hills Group<br>
            RH Group, Punnathanam, Manjalumoodu – Malaicode Road
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, message: 'Request sent successfully.' }));
  } catch (error) {
    console.error('SMTP Error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: error.message || 'Failed to send request.' }));
  }
}
