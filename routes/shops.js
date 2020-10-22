const router = require('express').Router();
const shopsCtrl = require('../controllers/shops');

router.use(require('../config/auth'));
router.post('/', checkAuth, shopsCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;