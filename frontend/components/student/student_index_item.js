import React from 'react';
import { Link } from 'react-router';

const StudentIndexItem = ({ deleteStudent, student, router }) => {
  return (
      <tr>
        <td>{student.fname} {student.lname}</td>
        <td>{student.email}</td>
        <td className="remove">
          <button onClick={() => deleteStudent(student.id)}>remove</button>
        </td>
      </tr>
  );
};

export default StudentIndexItem;
