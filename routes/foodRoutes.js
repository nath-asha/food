const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Get all food items
//router.get('/foods', foodController.getAllFoods);
router.get('/foods', async (req, res) => {
  try {
    const foodItems = await foodController.getAllFoodItems(req, res);
    res.status(200).json(foodItems);
  } catch (error) {
    console.error('Error fetching food items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
