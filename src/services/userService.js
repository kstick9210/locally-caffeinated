import tokenService from '../services/tokenService';
const BASE_URL = '/api/auth/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    return res.json();
  })
  .then(json => {
    if(json.token) return json;
    throw new Error(`${json.err || json.message}`)
  })
  .then(({ token }) => {
    tokenService.setToken(token);
  });
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    return res.json();
  })
  .then(json => {
    if(json.token) return json;
    throw new Error(`${json.err || json.message}`)
  })
  .then(({token}) => tokenService.setToken(token));
}

export default {
  signup,
  getUser,
  logout,
  login
};