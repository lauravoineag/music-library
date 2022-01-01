// src/routes/artist.js
const express = require('express');
const artistController = require('../controllers/artist');

const router = express.Router();

router.post('/', artistController.create);

//Route Read Artist
router.get('/', artistController.read);

//Route Reading a Single Artist
router.get('/:artistId', artistController.readById);

module.exports = router;
