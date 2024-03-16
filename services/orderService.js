const Order = require('../models/Order');

// Place a new order
exports.placeOrder = async (foodId, userId, addressId, paymentMode) => {
  try {
    // Create a new order
    const newOrder = new Order({
      foodId,
      userId,
      addressId,
      paymentMode
    });

    // Save the order to the database
    await newOrder.save();

    return { message: 'Order placed successfully' };
  } catch (error) {
    throw error;
  }
};
