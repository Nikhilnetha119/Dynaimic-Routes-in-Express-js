const path = require('path');
const express = require('express');

const router = express.Router();

const shops = require('../controllers/shops')

router.get('/shop', shops.controllergetshop);

router.get('/shop/:productId', shops.getproduct);

module.exports = router;