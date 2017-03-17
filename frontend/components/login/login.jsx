import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return (
      <div>
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login</Link>
          <Link to="/signup" activeClassName="current">Sign up!</Link>
          <button onClick={() => this.props.guestLogin()}>guest</button>
        </nav>
      </div>
    );
  }

  personalGreeting(currentUser, logout) {
    return(
      <nav className="login-signup">
        hello! {currentUser.username}
        <button className="header-button" onClick={logout}>logout</button>
      </nav>
    );
  }

  render() {
    let currentUser = this.props.currentUser;
    return (
      currentUser ?
      this.personalGreeting(
        currentUser, this.props.logout) : this.sessionLinks());
  }
}

export default Login;
