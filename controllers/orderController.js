// orderController.js

const Order = require('../models/Order');

// Place a new order
exports.placeOrder = async (req, res) => {
  try {
    const { foodId, userId, addressId, paymentMode } = req.body;

    // Create a new order
    const newOrder = new Order({
      foodId,
      userId,
      addressId,
      paymentMode,
      status: 'pending' // default status is 'pending'
    });

    // Save the order to the database
    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
