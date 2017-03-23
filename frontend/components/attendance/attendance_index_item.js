import React from 'react';
import { Link } from 'react-router';

const AttendanceIndexItem = ({ attendance, deleteAttendance, router }) => {
  return (
    <tr>
      <td>{attendance.date}</td>
      <td>{attendance.course_id}</td>
      <td>{attendance.student_id}</td>
      <td>
        <button onClick={() => deleteAttendance(attendance.id)}>remove</button>
      </td>
    </tr>
  );
};

export default AttendanceIndexItem;
