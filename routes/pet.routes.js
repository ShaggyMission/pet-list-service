const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

router.get('/list', petController.listPets);

module.exports = router;