const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['vegetarian', 'non-vegetarian', 'dessert'],
    required: true
  }
});

const foods = mongoose.model('foods', foodSchema);

module.exports = foods;
