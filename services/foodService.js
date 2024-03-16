// foodService.js

const Food = require('../models/Food');

// Get all food items
exports.getAllFoodItems = async () => {
  try {
    const foodItems = await Food.find();
    return foodItems;
  } catch (error) {
    throw error;
  }
};

