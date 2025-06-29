const express = require('express');
const connectDB = require('./config/db');
const petRoutes = require('./routes/pet.routes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const PORT = 3009;

const swaggerDocument = YAML.load('./docs/swagger.yaml');

app.use(express.json());

connectDB();
app.use('/pets', petRoutes);

app.use('/listPets-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`pet-list-service is running on port ${PORT}`);
});