import React from 'react';
import { Link, withRouter } from 'react-router';
import StudentIndexContainer from './student_index_container';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: ''
      };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const student = this.state;
    this.props.createStudent({ student })
      .then(this.setState({
        fname: '',
        lname: '',
        email: ''
      }));
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error.replace("Fname", "First name")
              .replace("Lname", "Last name")}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="main-component">
        <form onSubmit={this.handleSubmit} className="add-student">
          <input type="text"
            value={this.state.fname}
            onChange={this.update("fname")}
            placeholder="Enter First Name"
            />
          <input type="text"
            value={this.state.lname}
            onChange={this.update("lname")}
            placeholder="Enter Last Name"
            />
          <input type="email"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Enter Email"
            />
          <input type="submit" value="Add Student" />
          {this.renderErrors()}
        </form>
        <StudentIndexContainer />
      </div>
    );
  }
}

export default withRouter(StudentForm);
