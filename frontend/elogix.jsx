// frontend/elgoix.jsx

import React from 'react';
import ReactDOM from 'react-dom';

import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>eLogix Student Tracker</h1>, root);
});

window.signup = SessionAPIUtil.signup;
window.login = SessionAPIUtil.login;
window.logout = SessionAPIUtil.logout;
