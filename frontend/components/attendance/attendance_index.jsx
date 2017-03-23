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
        <ul>
          {attendances.map(attendance => <AttendanceIndexItem
            key={attendance.id}
            attendance={attendance}
            deleteAttendance={deleteAttendance}
          />)}
        </ul>
      </section>
    );
  }
}

export default AttendanceIndex;
