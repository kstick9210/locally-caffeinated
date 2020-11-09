import tokenService from "./tokenService";
const BASE_URL = "/api/shops/";

export function create(shop) {
    console.log("shop in services -->", shop);
    return fetch(BASE_URL, {
        method: "POST",
        headers: new Headers({"content-type": "application/json",
            "Authorization": "Bearer " + tokenService.getToken()
        }),
        body: JSON.stringify(shop)
    }, {mode: "cors"})
    .then(res => res.json())
    .catch((err) => console.log(err));
}