import React from 'react';
import { Link, withRouter } from 'react-router';
import CourseIndexContainer from './course_index_container';

class CourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const course = this.state;
    this.props.createCourse({ course })
      .then(this.setState({ title: '' }));
  }

  renderErrors() {
    console.log(this.props.errors);
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
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
        <form onSubmit={this.handleSubmit} className="add-course">
          <input type="text"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="Title"
            />
          <input type="submit" value="Create Course" />
          {this.renderErrors()}
        </form>
        <CourseIndexContainer />
      </div>
    );
  }
}

export default withRouter(CourseForm);
