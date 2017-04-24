import React from 'react';
import { Link, withRouter } from 'react-router';
import CourseFormContainer from './course/course_form_container';

const MainIndex = ({children}) => {
  return (
    <div className="main-body-index">
      <table>
        <tbody>
          <tr>
            <td>
              <Link to="/attendances/add" className="take_attendance">
                <img src="https://res.cloudinary.com/eddielao/image/upload/v1493049714/calendar_jahrba.png" />
                Take Attendance
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/courses/add">
                <img src="https://res.cloudinary.com/eddielao/image/upload/v1493049714/courses_he2znr.png" />
                Manage Courses
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/students/add">
                <img src="https://res.cloudinary.com/eddielao/image/upload/v1493049714/students_ihix8y.png" />
                Manage Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/grades/add">
                <img src="https://res.cloudinary.com/eddielao/image/upload/v1493049714/grades_dbyuok.png" />
                Record Grades
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainIndex;
