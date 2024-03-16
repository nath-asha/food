// email.js

const nodemailer = require('nodemailer');

// SMTP transport configuration for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourgmail@gmail.com', // Enter your Gmail address
    pass: 'yourgmailpassword'    // Enter your Gmail password
  }
});

// Function to send an email
const sendEmail = async (to, subject, text, html) => {
  try {
    await transporter.sendMail({
      from: 'yourgmail@gmail.com',
      to,
      subject,
      text,
      html
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmail };
