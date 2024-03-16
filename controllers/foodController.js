// foodController.js

const Food = require('../models/Food');

// Get all food items
exports.getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await Food.find();
    res.status(200).json(foodItems);
  } catch (error) {
    console.error('Error fetching food items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
