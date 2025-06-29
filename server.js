const express = require('express');
const connectDB = require('./config/db');
const petRoutes = require('./routes/pet.routes');

const app = express();
const PORT = 3009;

app.use(express.json());

connectDB();

app.use('/api/pets', petRoutes);

app.listen(PORT, () => {
  console.log(`pet-list-service is running on port ${PORT}`);
});
