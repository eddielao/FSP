// frontend/elgoix.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>eLogix Student Tracker</h1>, root);
});
