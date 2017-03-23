import React from 'react';
import { Link } from 'react-router';

const CourseIndexItem = ({ course, deleteCourse, router }) => (
  <tr>
    <td>{course.title}</td>
    <td>
      <button onClick={() => deleteCourse(course.id)}>remove</button>
    </td>
  </tr>
);

export default CourseIndexItem;
