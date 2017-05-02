import React from 'react';
import { Link, withRouter } from 'react-router';
import CourseFormContainer from './course/course_form_container';
import MainIndex from './main_index';

const Main = ({children}) => {
  const selectClass = e => {
    let allA = document.getElementsByClassName("selected");
    let eTarget = e.target;
    // debugger;
    Array.from(allA).forEach(aLink => {
    // debugger;
      if (aLink !== eTarget) {
        aLink.className = "unselected";
      }
    })
    e.target.className = "selected";
  }

  return (
    <div className="main-body">
      <div className="main-side-bar">
        <ul>
          <li>
            <Link to="/home/index" className="unselected" onClick={e => selectClass(e)}>
              Home
            </Link>
          </li>
        </ul>
          <h4>ATTENDANCE</h4>
        <ul>
          <li>
            <Link to="attendances/add" className="unselected" onClick={e => selectClass(e)}>
              Take Attendance
            </Link>
          </li>
        </ul>
          <h4>MANAGEMENT</h4>
        <ul>
          <li>
            <Link to="students/add" className="unselected" onClick={e => selectClass(e)}>
              Students
            </Link>
          </li>
          <li>
            <Link to="/courses/add" className="unselected" onClick={e => selectClass(e)}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/grades/add" className="unselected" onClick={e => selectClass(e)}>
              Grades
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Main;
