import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import { style } from '../modal/modal_style';

const AttendanceIndexItem = ({ attendance, deleteAttendance, router }) => {
  return (
    <tr>
      <td>{attendance.date}</td>
      <td>{attendance.course.title}</td>
      <td>{attendance.student.fname} {attendance.student.lname}</td>
      <td>
        <button className={attendance.status} disabled>
          {attendance.status.charAt(0)}
        </button>
      </td>
      <td className="remove">
        <button onClick={() => deleteAttendance(attendance.id)}>remove</button>
      </td>
    </tr>
  );
};

export default AttendanceIndexItem;
