const mongoose = require('mongoose');

const uri = 'mongodb+srv://lmpacheco:ZrvwTwBSagITmKAT@cluster0.ny218yj.mongodb.net/shaggymission_pets?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
