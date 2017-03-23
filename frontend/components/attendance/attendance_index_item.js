import React from 'react';
import { Link } from 'react-router';

const AttendanceIndexItem = ({ attendance, deleteAttendance, router }) => {
  return (
    <li className="attendance-index-item">
      <Link to={`/attendances/${attendance.id}`}>
        <span>{attendance.date}, </span>
        <span>{attendance.course_id}, </span>
        <span>{attendance.student_id}</span>
      </Link>
      <button onClick={() => deleteAttendance(attendance.id)}>remove</button>
    </li>
  );
};

export default AttendanceIndexItem;
