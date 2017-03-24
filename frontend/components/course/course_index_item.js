import React from 'react';
import { Link } from 'react-router';

// const CourseIndexItem = ({ course, deleteCourse, router, updateCourse }) => {
//   return (
//     <tr>
//       <td><input type="text" id="update-course-title"
//         defaultValue={course.title} />
//       </td>
//       <td className="remove">
//         <button onClick={() => deleteCourse(course.id)}>remove</button>
//         <button onClick={() => updateCourse(course.id)}>update</button>
//       </td>
//     </tr>
//   );
// };

class CourseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.course;
    this.updateField=this.updateField.bind(this);
  }

  updateField(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  render() {
    return (
      <tr>
        <td><input type="text" id="update-course-title"
          onChange={this.updateField}
          defaultValue={this.state.title} />
        </td>
        <td className="remove">
          <button onClick={() => this.props.deleteCourse(this.state.id)}>remove</button>
          <button onClick={() => this.props.updateCourse(this.state)}>update</button>
        </td>
      </tr>
    );
  }
}

export default CourseIndexItem;
