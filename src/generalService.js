import { browserHistory } from 'react-router';
const loginModel = { 'email': '', 'password': '' }
const apiToken = localStorage.getItem('api_token');
export const getCategories = (urlData) => fetch(urlData, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': apiToken
  }

}).then(function (response) {
      return response.json();
    }).then(function (result) {
      return result;
     // console.log('success', result);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
export const getUser = () => {}

//export {getCategories};