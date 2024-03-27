const foods = require('../models/Food');

// Get all food items
exports.getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await foods.find();
    return foodItems;
  } catch (error) {
    throw new Error('Error fetching food items:', error);
  }
};
// controllers/foodController.js

const Food = require('../models/Food');

// Controller to handle fetching all food items
exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to handle creating a new food item
exports.createFood = async (req, res) => {
  const food = new Food({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image:req.body.image,
    category:req.body.category
  });
  try {
    const newFood = await food.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
