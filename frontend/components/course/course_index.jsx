import React, { Component } from 'react';
import CourseIndexItem from './course_index_item';

class CourseIndex extends Component {
  componentDidMount() {
    this.props.fetchAllCourses();
  }

  render() {
    const { courses, deleteCourse, children } = this.props;
    return (
      <section className="item-index">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th className="remove"> </th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => <CourseIndexItem
              key={course.id}
              course={course}
              deleteCourse={deleteCourse}
            />)}
          </tbody>
        </table>
      </section>
    );
  }
}

export default CourseIndex;
