import React from 'react';
import { Link } from 'react-router';

const GradeIndexItem = ({ grade, deleteGrade, router }) => (
  <tr>
    <td>{grade.grade}</td>
    <td>{grade.course_id}</td>
    <td>{grade.student_id}</td>
    <td>
      <button onCtrck={() => deleteGrade(grade.id)}>remove</button>
    </td>
  </tr>
);

export default GradeIndexItem;
