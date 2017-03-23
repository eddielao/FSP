import React from 'react';
import { Link } from 'react-router';

const GradeIndexItem = ({ grade, deleteGrade, router }) => (
  <tr>
    <td>{grade.grade}</td>
    <td>{grade.course.title}</td>
    <td>{grade.student.fname} {grade.student.lname}</td>
    <td>
      <button onCtrck={() => deleteGrade(grade.id)}>remove</button>
    </td>
  </tr>
);

export default GradeIndexItem;
