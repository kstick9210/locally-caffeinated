const Shop = require('../models/shop');

module.exports = {
    create
}

function create(req, res) {
    req.body.user = req.user._id;
    Shop.create(req.body)
    .then(shop => {res.json(shop)})
    .catch(err => {res.json(err)})
}