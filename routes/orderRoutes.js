// orderRoutes.js

const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controllers/orderController');

// Place a new order
router.post('/order', async (req, res) => {
  const { foodId, userId, addressId, paymentMode } = req.body;
  try {
    const result = await placeOrder(foodId, userId, addressId, paymentMode);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
