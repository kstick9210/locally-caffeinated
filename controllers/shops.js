const Shop = require('../models/shop');

module.exports = {
    create,
    getUserShops
}

function create(req, res) {
    console.log("req.body in controller -->", req.body);
    Shop.create(req.body)
    .then(shop => {res.json(shop)})
    .catch(err => {res.json(err)})
}

function getUserShops(req, res) {
    Shop.find({ user:req.params.id })
    .then(shops => res.json(shops))
    .catch(err => res.json(err))
}