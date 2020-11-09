const Shop = require('../models/shop');

module.exports = {
    create
}

function create(req, res) {
    console.log("req.body in controller -->", req.body);
    Shop.create(req.body)
    .then(shop => {res.json(shop)})
    .catch(err => {res.json(err)})
}