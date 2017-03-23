import { connect } from 'react-redux';
import { clearErrors } from '../../actions/error_actions';
import { createStudent } from '../../actions/student_actions';
import StudentForm from './student_form';

const mapStateToProps = ({ errors, students }) => ({
  errors: errors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  createStudent: student => dispatch(createStudent(student))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm);
