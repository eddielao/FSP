import React from 'react';
import { Link } from 'react-router';

const CourseIndexItem = ({ course, deleteCourse, router }) => (
  <li className="course-index-item">
    <Link to={`/courses/${course.id}`}>
      <span>{course.title}</span>
    </Link>
    <button onClick={() => deleteCourse(course.id)}>remove</button>
  </li>
);

export default CourseIndexItem;
