import React from 'react';
import { Link } from 'react-router';

const GradeIndexItem = ({ grade, deleteGrade, router }) => (
  <li className="grade-index-item">
    <Link to={`/grades/${grade.id}`}>
      <span>{grade.grade}, </span>
      <span>{grade.course_id}, </span>
      <span>{grade.student_id}</span>
    </Link>
    <button onClick={() => deleteGrade(grade.id)}>remove</button>
  </li>
);

export default GradeIndexItem;
