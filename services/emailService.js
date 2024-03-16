// emailService.js

const { sendEmail } = require('../config/email');

// Send email
exports.sendVerificationEmail = async (to, subject, text, html) => {
  try {
    await sendEmail(to, subject, text, html);
    return { message: 'Email sent successfully' };
  } catch (error) {
    throw error;
  }
};
