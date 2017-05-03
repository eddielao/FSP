// frontend/components/root.jsx

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer
  from './session_form/session_form_container';
import AttendanceFormContainer from './attendance/attendance_form_container';
import CourseFormContainer from './course/course_form_container';
import CourseIndexContainer from './course/course_index_container';
import GradeFormContainer from './grade/grade_form_container';
import Main from './main';
import MainIndex from './main_index';
import Splash from './splash';
import StudentFormContainer from './student/student_form_container';
import StudentIndexContainer from './student/student_index_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Splash } />
          <Route path="/login" component={ SessionFormContainer }
            onEnter={_redirectIfLoggedIn}
          />
          <Route path="/signup" component={ SessionFormContainer }
            onEnter={_redirectIfLoggedIn}
          />
          <Route path="/home" component={ Main } onEnter={_ensureLoggedIn}>
            <Route path="/home/index" component={ MainIndex }
              onEnter={_ensureLoggedIn}
            />
            <Route path="/students/index" component={ StudentIndexContainer }
              onEnter={_ensureLoggedIn}
            />
            <Route path="/students/add" component={ StudentFormContainer }
              onEnter={_ensureLoggedIn}
            />
            <Route path="/courses/index" component={ CourseIndexContainer }
              onEnter={_ensureLoggedIn}
            />
            <Route path="/courses/add" component={ CourseFormContainer }
              onEnter={_ensureLoggedIn}
            />
            <Route path="/attendances/add" component={ AttendanceFormContainer }
              onEnter={_ensureLoggedIn}
            />
            <Route path="/grades/add" component={ GradeFormContainer }
              onEnter={_ensureLoggedIn}
            />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
