import React from 'react';
import configureStore from './store/store';

let store;

if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
} else {
  store = configureStore();
}

export default store;