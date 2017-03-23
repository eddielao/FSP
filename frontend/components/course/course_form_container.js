import { connect } from 'react-redux';
import { clearErrors } from '../../actions/error_actions';
import { createCourse } from '../../actions/course_actions';
import CourseForm from './course_form';

const mapStateToProps = ({ courses, errors }) => ({
  errors: errors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  createCourse: course => dispatch(createCourse(course))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseForm);
