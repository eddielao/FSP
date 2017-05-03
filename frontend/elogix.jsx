// frontend/elgoix.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import store from './storejs';
import { login } from './actions/session_actions';

import { fetchAllCourses } from './actions/course_actions';
import { fetchAllStudents } from './actions/student_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});

window.fetchAllCourses=fetchAllCourses;
window.fetchAllStudents=fetchAllStudents;