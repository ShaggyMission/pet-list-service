const express = require('express');
const petRoutes = require('./routes/pet.routes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

const swaggerDocument = YAML.load('./docs/swagger.yaml');

app.use(express.json());

app.use('/pets', petRoutes);

app.use('/listPets-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
