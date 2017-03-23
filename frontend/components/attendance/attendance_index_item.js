import React from 'react';
import { Link } from 'react-router';

const AttendanceIndexItem = ({ attendance, deleteAttendance, router }) => {
  return (
    <tr>
      <td>{attendance.date}</td>
      <td>{attendance.course.title}</td>
      <td>{attendance.student.fname} {attendance.student.lname}</td>
      <td className="remove">
        <button onClick={() => deleteAttendance(attendance.id)}>remove</button>
      </td>
    </tr>
  );
};

export default AttendanceIndexItem;
