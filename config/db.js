const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = 'mongodb://admin:Lis12345@54.156.27.209:27017/admin';

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports = connectDB;
