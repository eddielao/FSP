import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
  const guest = { user: { username: 'Guest', password: 'password'} };
  return {
    logout: () => dispatch(logout()),
    guestLogin: () => dispatch(login(guest))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
