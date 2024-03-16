// foodRoutes.js

const express = require('express');
const router = express.Router();
const { getAllFoodItems } = require('../controllers/foodController');

// Get all food items
router.get('/food', async (req, res) => {
  try {
    const foodItems = await getAllFoodItems();
    res.status(200).json(foodItems);
  } catch (error) {
    console.error('Error fetching food items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
