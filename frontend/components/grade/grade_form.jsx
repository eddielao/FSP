import React from 'react';
import { Link, withRouter } from 'react-router';
import GradeIndexContainer from './grade_index_container';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: '',
      course_id: '',
      student_id: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCourses();
    this.props.fetchAllStudents();
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const grade = this.state;
    this.props.createGrade({ grade })
      .then(this.setState({
        grade: '',
        course_id: '',
        student_id: ''
      }));
  }

  listCourses() {
    return (
      <select
        value={this.state.course_id}
        onChange={this.update('course_id')}
      >
        <option value="" disabled>select course</option>
        {this.props.courses.map((course, i) => (
            <option value={course.id} key={i}>
              {course.title}
            </option>
        ))}
      </select>
    );
  }

  listStudents() {
    return (
      <select
        value={this.state.student_id}
        onChange={this.update('student_id')}
      >
        <option value="" disabled>select student</option>
        {this.props.students.map((student, i) => (
            <option value={student.id} key={i}>
              {student.fname} {student.lname}
            </option>
        ))}
      </select>
    );
  }

  renderErrors() {
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
        <form onSubmit={this.handleSubmit} className="add-grade">
          <select type="text"
            value={this.state.grade}
            onChange={this.update("grade")}
            defaultValue="select grade"
            >
            <option value="" disabled>select grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
          {this.listCourses()}
          {this.listStudents()}
          <input type="submit" value="Add Grade" />
          {this.renderErrors()}
        </form>
        <GradeIndexContainer />
      </div>
    );
  }
}

export default withRouter(GradeForm);
