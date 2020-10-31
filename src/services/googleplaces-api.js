const BASE_URL = '/api/googleplaces';

export function search(formData) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(formData)
    }, {mode: "cors"})
    .then(res => res.json())
}