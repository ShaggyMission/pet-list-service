const app = require('./app');
const connectDB = require('./config/db');

const PORT = 3009;

connectDB();

app.listen(PORT, () => {
  console.log(`pet-list-service is running on port ${PORT}`);
});
