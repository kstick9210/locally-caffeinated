const axios = require('axios');
const key = process.env.GOOGLE_API_KEY;
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee+shops+';

module.exports = {
    getCoffeeShops
}

function getCoffeeShops(req, res) {
    console.log("got to googleplaces controller");
    axios.get(`${BASE_URL}${req.body.searchTerm}&key=${key}`)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
}