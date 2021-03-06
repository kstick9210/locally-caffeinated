const axios = require("axios");
const key = process.env.REACT_APP_GOOGLE_API_KEY;
const CORS = "https://kstick-cors-anywhere.herokuapp.com/"
const BASE_URL = "https://maps.googleapis.com/maps/api/place/";

export function search(searchTerm) {
    return axios.get(`${CORS}${BASE_URL}textsearch/json?query=coffee+shops+${searchTerm}&key=${key}`)
    .catch((err) => console.log(err));
}

export function getShopDetails(placeId) {
    return axios.get(`${CORS}${BASE_URL}details/json?place_id=${placeId}&key=${key}`)
    .catch((err) => console.log(err));
}