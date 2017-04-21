import { browserHistory } from 'react-router';
const loginModel = { 'email': '', 'password': '' }
<<<<<<< HEAD
export const apiUrl = 'http://www.canlitv.world'
=======
export const apiUrl = 'http://canlitv.world'
>>>>>>> origin/master
const getToken = (postUrl, data) => {
    fetch(postUrl, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    }).then(function (response) {
        return response.json();
    }).then(function (result) {
        if (result.api_token) {
            setIdToken(result.api_token)
        }
    }).catch(function (error) {
<<<<<<< HEAD
        browserHistory.push(window.location.pathname + '#/');
=======
        browserHistory.push('#/');
>>>>>>> origin/master
    });
}

export function login(data) {
    getToken(apiUrl + '/login', data);
}

export function logout() {
    localStorage.removeItem('api_token');
    fetch(apiUrl + '/logout');
}

function setIdToken(token) {
    localStorage.setItem('api_token', token);
    localStorage.setItem('api_url', apiUrl);

    setTimeout(function () {
<<<<<<< HEAD
window.location = window.location.pathname;
        //location.reload();
=======
        location.reload();
>>>>>>> origin/master
    }, 1000);

}

export function isLoggedIn() {
    const apiToken = localStorage.getItem('api_token');
    if (apiToken) {
<<<<<<< HEAD
        browserHistory.push(window.location.pathname + '#/dashboard');
    } else {
        browserHistory.push(window.location.pathname + '#/');
=======
        browserHistory.push('#/dashboard');
    } else {
        browserHistory.push('#/');
>>>>>>> origin/master
    }
}


/*
export function requireAuth(token) {
    return token;
}

function getIdToken(token) {
    return token;
}

function clearIdToken(token) {
    return token;
}

function getTokenExpirationDate(encodedToken) {
    return encodedToken;
}

function isTokenExpired(token) {
    return token;
}
*/