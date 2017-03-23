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
        <ul>
          {courses.map(course => <CourseIndexItem
            key={course.id}
            course={course}
            deleteCourse={deleteCourse}
          />)}
        </ul>
      </section>
    );
  }
}

export default CourseIndex;
