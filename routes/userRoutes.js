// userRoutes.js

const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/userController');
const { authenticate } = require('../middleware/authentication');

// Get user profile
router.get('/profile', authenticate, async (req, res) => {
  try {
    const userProfile = await getUserProfile(req.userId);
    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
