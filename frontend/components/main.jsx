import React from 'react';
import { Link, withRouter } from 'react-router';
import CourseFormContainer from './course/course_form_container';
import MainIndex from './main_index';

const Main = ({children}) => {
  return (
    <div className="main-body">
      <div className="main-side-bar">
        <ul>
          <li><Link to="/home/index">Home</Link></li>
        </ul>
          <h4>ATTENDANCE</h4>
        <ul>
          <li><Link to="attendances/add">Take Attendance</Link></li>
        </ul>
          <h4>MANAGEMENT</h4>
        <ul>
          <li><Link to="students/add">Students</Link></li>
          <li><Link to="/courses/add">Courses</Link></li>
          <li><Link to="/grades/add">Grades</Link></li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Main;
