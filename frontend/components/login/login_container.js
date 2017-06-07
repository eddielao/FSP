import { connect } from 'react-redux';
import { clearErrors } from '../../actions/error_actions';
import { login, logout } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({ errors, session }) => ({
  currentUser: session.currentUser,
  errors: errors
});

const mapDispatchToProps = dispatch => {
  const guest = { user: { username: 'Guest', password: 'password'} };
  return {
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    guestLogin: () => dispatch(login(guest))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
