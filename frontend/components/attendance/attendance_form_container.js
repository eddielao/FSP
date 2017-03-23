import { connect } from 'react-redux';
import { clearErrors } from '../../actions/error_actions';
import { createAttendance } from '../../actions/attendance_actions';
import AttendanceForm from './attendance_form';
import { fetchAllStudents } from '../../actions/student_actions';
import { fetchAllCourses } from '../../actions/course_actions';
import { selectAllStudents } from '../../reducers/student_selectors';
import { selectAllCourses } from '../../reducers/course_selectors';

const mapStateToProps = ({ attendances, errors, courses, students }) => ({
  courses: selectAllCourses(courses),
  errors: errors,
  students: selectAllStudents(students)
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  createAttendance: attendance => dispatch(createAttendance(attendance)),
  fetchAllCourses: () => dispatch(fetchAllCourses()),
  fetchAllStudents: () => dispatch(fetchAllStudents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceForm);
