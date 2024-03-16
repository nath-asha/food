const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from JWT token
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

