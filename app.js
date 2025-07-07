const express = require('express');
const cors = require('cors'); // 👈 Importa cors
const petRoutes = require('./routes/pet.routes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

const corsOptions = {
  origin: 'http://3.208.223.30:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions)); 
app.use(express.json());

const swaggerDocument = YAML.load('./docs/swagger.yaml');

app.use('/pets', petRoutes);
app.use('/listPets-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
