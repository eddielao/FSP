import { connect } from 'react-redux';
import {
  createCourse
  } from '../../actions/course_actions';
import CourseForm from './course_form';

const mapStateToProps = ({ courses }) => ({
  errors: courses.errors
});

const mapDispatchToProps = dispatch => ({
  createCourse: course => dispatch(createCourse(course))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseForm);
