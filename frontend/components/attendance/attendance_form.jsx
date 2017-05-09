import React from 'react';
import { Link, withRouter } from 'react-router';
import AttendanceIndexContainer from './attendance_index_container';
import DayPicker from 'react-day-picker';
import dateFormat from 'dateformat';

class AttendanceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      course_id: '',
      student_id: '',
      status: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCourses();
    this.props.fetchAllStudents();
    this.props.clearErrors();
  }

  handleDayClick(day, {disabled, selected}) {
    let formatted = dateFormat(day, "isoDate");
    this.setState({
      iday: selected ? null : day, //Added to bypass console proptypes warning
      date: formatted
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const attendance = this.state;
    this.props.createAttendance({ attendance })
      .then(this.setState({
        date: '',
        course_id: '',
        student_id: '',
        status: ''
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

  listStatuses() {
    const statuses = ['Absent', 'Present', 'Tardy'];
    return (
      <select
        value={this.state.status}
        onChange={this.update('status')}
      >
        <option value="" disabled>status</option>
        {statuses.map((status, i) => (
          <option value={status} key={i}>
            {status}
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
        <option value="" disabled>student</option>
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
        <form onSubmit={this.handleSubmit} className="add-attendance">
          <div className="dateLabel"><label>Select date</label></div>
          <DayPicker
            initialMonth={ new Date(2017, 4) }
            selectedDays={this.state.iday}
            onDayClick={this.handleDayClick}
          />
          {this.listCourses()}
          {this.listStudents()}
          {this.listStatuses()}
          <input type="submit" value="Add Attendance" />
          {this.renderErrors()}
        </form>
        <AttendanceIndexContainer />
      </div>
    );
  }
}

export default withRouter(AttendanceForm);
