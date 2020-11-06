const axios = require("axios");
const key = process.env.REACT_APP_GOOGLE_API_KEY;
const CORS = "https://kstick-cors-anywhere.herokuapp.com/"
const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee+shops+";

export function search(searchTerm) {
    return axios.get(`${CORS}${BASE_URL}${searchTerm}&key=${key}`)
    .catch((err) => console.log(err));
}