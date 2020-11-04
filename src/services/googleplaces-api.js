const axios = require('axios');
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';
const key = process.env.GOOGLE_API_KEY;

// export function search(searchTerm) {
//     return fetch(BASE_URL, {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         body: JSON.stringify(searchTerm)
//     }, {mode: "cors"})
//     .then(res => res.json())
// }

export function search(req, res) {
    axios.get(`${BASE_URL}query=coffee+shop+${req.body.query}&key=${key}`)
    .then(response => {res.json(response.data)})
    .catch((err) => console.log(err));
}