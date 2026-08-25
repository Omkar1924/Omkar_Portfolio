const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio Express Backend is running smoothly.' });
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: name, email, and message.'
    });
  }

  console.log(`[Contact Request Received] Name: ${name} | Email: ${email}`);

  // Configure Nodemailer Transporter
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = process.env.SMTP_PORT || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.warn('[Nodemailer Warning] SMTP credentials not set in .env. Simulating email dispatch to omkar190205@gmail.com');
    return res.status(200).json({
      success: true,
      message: 'Thank you for your message! Your note has been received.',
      simulated: true
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort == 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'omkar190205@gmail.com',
      subject: `Portfolio Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6366f1;">New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f3f4f6; padding: 15px; border-left: 4px solid #6366f1; margin: 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('[Nodemailer Success] Email successfully sent to omkar190205@gmail.com');

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('[Nodemailer Error]', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again or reach out directly to omkar190205@gmail.com'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Express Portfolio Backend running on http://localhost:${PORT}`);
});
