const router = require('express').Router();
const googlePlacesAPICtrl = require('../controllers/googleplaces');

router.post('/', googlePlacesAPICtrl.getCoffeeShops);

module.exports = router;