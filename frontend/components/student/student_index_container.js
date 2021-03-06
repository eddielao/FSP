import { connect } from 'react-redux';
import StudentIndex from './student_index';
import {
  fetchAllStudents,
  deleteStudent,
  updateStudent
  } from '../../actions/student_actions';
import { selectAllStudents } from '../../reducers/student_selectors';

const mapStateToProps = state => ({
  students: selectAllStudents(state.students)
});

const mapDispatchToProps = dispatch => ({
  deleteStudent: id => dispatch(deleteStudent(id)),
  fetchAllStudents: () => dispatch(fetchAllStudents()),
  updateStudent: student => dispatch(updateStudent(student))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentIndex);
