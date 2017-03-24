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
                <img src="https://res.cloudinary.com/eddielao/image/upload/v1490243301/take_attendance.png" />
                Take Attendance
              </Link>
            </td>
            <td>
              <Link to="/courses/add">
                <img src="https://res.cloudinary.com/eddielao/image/upload/v1490243656/mange_courses.png" />
                Manage Courses
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/students/add">
                <img src="https://res.cloudinary.com/eddielao/image/upload/v1490243539/manage_students.png" />
                Manage Students
              </Link>
            </td>
            <td>
              <Link to="/grades/add">
                <img src="https://res.cloudinary.com/eddielao/image/upload/v1490243870/record_grades.png" />
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
