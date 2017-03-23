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
              <img src="http://res.cloudinary.com/eddielao/image/upload/v1490243301/take_attendance.png" />
              <Link to="/attendances/add" className="take_attendance">Take Attendance</Link>
            </td>
            <td>
              <img src="http://res.cloudinary.com/eddielao/image/upload/v1490243656/mange_courses.png" />
              <Link to="/courses/add">Manage Courses</Link>
            </td>
          </tr>
          <tr>
            <td>
              <img src="http://res.cloudinary.com/eddielao/image/upload/v1490243539/manage_students.png" />
              <Link to="/students/add">Manage Students</Link>
            </td>
            <td>
              <img src="http://res.cloudinary.com/eddielao/image/upload/v1490243870/record_grades.png" />
              <Link to="/grades/add">Record Grades</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainIndex;
