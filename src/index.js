import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import { isLoggedIn } from './AuthService';
<<<<<<< HEAD

=======
let datad = 1;
console.log(datad ++);
>>>>>>> origin/master
isLoggedIn();
ReactDOM.render(
  <Router routes={routes} history={hashHistory} />, document.getElementById('root')
);
