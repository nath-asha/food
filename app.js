const express = require('express');
const app = express();
const mongoose = require('mongoose');

// const mongoose = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

app.use(express.json());


const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection events
const dbConnection = mongoose.connection;

dbConnection.on('connected', () => {
  console.log('Connected to MongoDB');
});

dbConnection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
});

dbConnection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Close MongoDB connection when Node.js process terminates
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to application termination');
    process.exit(0);
  } catch (error) {
    console.error('Error closing MongoDB connection:', error.message);
    process.exit(1);
  }
});

// Routes
app.use('/auth', authRoutes);
app.use('/food', foodRoutes);
app.use('/order', orderRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
