const Food = require('../models/Food');

// Get all food items
exports.getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await Food.find();
    return foodItems;
  } catch (error) {
    throw new Error('Error fetching food items:', error);
  }
};
