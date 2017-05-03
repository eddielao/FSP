// frontend/elgoix.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './actions/session_actions';

import { fetchAllCourses } from './actions/course_actions';
import { fetchAllStudents } from './actions/student_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, root);
});

window.fetchAllCourses=fetchAllCourses;
window.fetchAllStudents=fetchAllStudents;
