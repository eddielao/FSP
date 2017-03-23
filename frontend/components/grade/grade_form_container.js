import { connect } from 'react-redux';
import { clearErrors } from '../../actions/error_actions';
import {
  createGrade } from '../../actions/grade_actions';
import {
  fetchAllStudents } from '../../actions/student_actions';
import {
  fetchAllCourses } from '../../actions/course_actions';
import {
  selectAllStudents } from '../../reducers/student_selectors';
import {
  selectAllCourses } from '../../reducers/course_selectors';
import GradeForm from './grade_form';

const mapStateToProps = ({courses, errors, grades, students}) => ({
  courses: selectAllCourses(courses),
  errors: errors,
  students: selectAllStudents(students)
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  createGrade: grade => dispatch(createGrade(grade)),
  fetchAllCourses: () => dispatch(fetchAllCourses()),
  fetchAllStudents: () => dispatch(fetchAllStudents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GradeForm);
