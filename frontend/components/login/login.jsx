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
          <button onClick={() => this.props.guestLogin()}>Guest</button>
        </nav>
      </div>
    );
  }

  personalGreeting(currentUser, logout) {
    return(
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
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
