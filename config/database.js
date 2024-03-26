const mongoose = require('mongoose');

// MongoDB connection URI 
const dbURI = 'mongodb+srv://nathasha:JTudgWPkl0wp7yrh@cluster0.zi63wrx.mongodb.net/';

// MongoDB options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
};

// Connect to MongoDB
mongoose.connect(dbURI, options);

// Connection events
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Close MongoDB connection when Node.js process terminates
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to application termination');
    process.exit(0);
  });
});

module.exports = mongoose;
