import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from './util/session/session_api_util';
import configureStore from './store/store';
import * as ApiActions from './actions/session/session_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Sociagram</h1>, root);
});

window.login = ApiActions.login;
window.signup = ApiActions.signup;
window.logout = ApiActions.logout;
