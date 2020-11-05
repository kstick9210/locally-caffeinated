import tokenService from '../services/tokenService';
const BASE_URL = '/api/googleplaces';

export function search(searchTerm) {
    console.log("start of googleplaces services");
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(searchTerm)
    }, {mode: "cors"})
    .then(res => res.json())
    .catch(err => console.log("error from services -->", err))
}