// authValidation.js

import { object, string } from 'joi';

// Validation schema for user registration
const registerSchema = object({
  email: string().email().required(),
  password: string().min(6).required(),
  role: string().valid('user', 'admin', 'super user').optional() // Role is optional
});

// Validation schema for user login
const loginSchema = object({
  email: string().email().required(),
  password: string().required()
});

export default {
  registerSchema,
  loginSchema
};
