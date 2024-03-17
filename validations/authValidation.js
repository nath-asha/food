// authValidation.js

const Joi = require('joi');

// Validation schema for user registration
const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('user', 'admin', 'super user').optional() // Role is optional
});

// Validation schema for user login
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

module.exports = {
  registerSchema,
  loginSchema
};
