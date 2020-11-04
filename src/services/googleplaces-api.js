const axios = require('axios');
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';
const key = process.env.GOOGLE_API_KEY;

export function search(searchTerm) {
    return fetch(`${BASE_URL}query=coffee+shop+${searchTerm}&key=${key}`, {
        method: 'GET',
        headers: {'content-type': 'application/json'}
    }, {mode: "cors"})
    .then(res => res.json())
}

// export function search(searchTerm) {
//      return axios.get(`${BASE_URL}query=coffee+shop+${searchTerm}&key=${key}`)
//     .catch((err) => console.log(err));
// }