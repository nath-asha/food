const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection URI from environment variable
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

module.exports = dbConnection;
