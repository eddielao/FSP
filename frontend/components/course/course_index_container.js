import { connect } from 'react-redux';
import CourseIndex from './course_index';
import {
  fetchAllCourses,
  deleteCourse,
  updateCourse } from '../../actions/course_actions';
import { selectAllCourses } from '../../reducers/course_selectors';

const mapStateToProps = state => ({
  courses: selectAllCourses(state.courses)
});

const mapDispatchToProps = dispatch => ({
  deleteCourse: id => dispatch(deleteCourse(id)),
  fetchAllCourses: () => dispatch(fetchAllCourses()),
  updateCourse: course => dispatch(updateCourse(course))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseIndex);
