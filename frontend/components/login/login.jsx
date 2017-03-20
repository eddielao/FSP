import React from 'react';
import { Link, withRouter } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.guestLogin()
      .then(() => this.props.router.push("/courses/add"));
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => this.props.router.push("/login"));
  }

  sessionLinks() {
    return (
      <div>
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login</Link>
          <Link to="/signup" activeClassName="current">Sign up!</Link>
          <button onClick={this.handleGuest}>guest</button>
        </nav>
      </div>
    );
  }

  personalGreeting(currentUser, logout) {
    return(
      <nav className="login-signup">
        {currentUser.username}
        <button className="header-button"
          onClick={this.handleLogout}>logout</button>
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

export default withRouter(Login);
