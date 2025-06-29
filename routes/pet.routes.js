const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

router.get('/', petController.listPets);

module.exports = router;