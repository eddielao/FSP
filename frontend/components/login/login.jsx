import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import { style } from '../modal/modal_style';
import SessionFormContainer from '../session_form/session_form_container';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  username: "",
                  password: "",
                  formType: "login",
                  modalOpen: false
                };
    this.handleGuest = this.handleGuest.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.guestLogin()
      .then(() => this.props.router.push("/home/index"));
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => this.props.router.push("/login"));
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ formType: this.state.formType, modalOpen: true });
  }

  sessionLinks() {
    return (
      <div>
        <nav className="login-signup">
          <a onClick={this.openModal}>LOGIN</a>
          <Link to="/signup" activeClassName="current">SIGN UP</Link>
          <button onClick={this.handleGuest}>guest</button>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={style}
            contentLabel="Modal"
            >
            <SessionFormContainer formsType={this.state.formType} />
          </Modal>
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
    if (currentUser) {
      return this.personalGreeting(currentUser, this.props.logout);
    } else {
      return this.sessionLinks();
    }
  }
}

export default withRouter(Login);
