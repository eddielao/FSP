import React, { Component } from 'react';
import CourseIndexItem from './course_index_item';

class CourseIndex extends Component {
  componentDidMount() {
    this.props.fetchAllCourses();
  }

  render() {
    const { courses, deleteCourse, updateCourse } = this.props;
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
              updateCourse={updateCourse}
            />)}
          </tbody>
        </table>
      </section>
    );
  }
}

export default CourseIndex;
