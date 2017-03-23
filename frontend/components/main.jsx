import React from 'react';
import { Link, withRouter } from 'react-router';
import CourseFormContainer from './course/course_form_container';
import MainIndex from './main_index';

const Main = ({children}) => {
  return (
    <div className="main-body">
      <div className="main-side-bar">
        <Link to="/home/index">Home</Link>
        <h4>ATTENDANCE</h4>
        <Link to="attendances/add">Take Attendance</Link>
        <h4>MANAGEMENT</h4>
        <Link to="students/add">Student</Link>
        <Link to="/courses/add">Course</Link>
        <Link to="/grades/add">Grade</Link>
      </div>
      {children}
    </div>
  );
};

export default Main;
