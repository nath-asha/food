// authRoutes.js

const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { validateBody } = require('../middleware/validation');
const { authSchema } = require('../validations/authValidation');

// Register a new user
router.post('/register', validateBody(authSchema), async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const result = await register(email, password, role);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login user
router.post('/login', validateBody(authSchema), async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await login(email, password);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
