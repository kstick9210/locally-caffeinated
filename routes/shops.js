const router = require('express').Router();
const shopsCtrl = require('../controllers/shops');

router.post('/', shopsCtrl.create);

module.exports = router;