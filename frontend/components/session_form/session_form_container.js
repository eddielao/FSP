import { connect } from 'react-redux';
import {
  login,
  logout,
  signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors, session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors
});

const mapDispatchToProps = (dispatch, { formsType }) => {
  const formType = formsType;
  const processForm = (formType === 'login') ? login : signup;

  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
