const express = require('express');
const { getWishes, addWish } = require('../controllers/wishController');
const router = express.Router();

// GET all wishes
router.get('/wishes', getWishes);

// POST a new wish
router.post('/wishes', addWish);

module.exports = router;
