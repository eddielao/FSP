import React, { Component } from 'react';
import AttendanceIndexItem from './attendance_index_item';

class AttendanceIndex extends Component {
  componentDidMount() {
    this.props.fetchAllAttendances();
  }

  render() {
    const { attendances, deleteAttendance, children } = this.props;
    return (
      <section className="item-index">
        <table>
          <thead>
            <tr>
              <th>Present</th>
              <th>Course ID</th>
              <th>Student ID</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {attendances.map(attendance => <AttendanceIndexItem
              key={attendance.id}
              attendance={attendance}
              deleteAttendance={deleteAttendance}
              />)}
          </tbody>
        </table>
      </section>
    );
  }
}

export default AttendanceIndex;
