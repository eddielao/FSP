import React from 'react';
import { Link } from 'react-router';

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

          // Removed course causes existing grade render error
          // <button onClick={() => this.props.deleteCourse(this.state.id)}>
          //   remove
          // </button>
  render() {
    return (
      <tr>
        <td><input type="text" id="update-course-title"
          onChange={this.updateField}
          defaultValue={this.state.title} />
        </td>
        <td className="remove">
          <button onClick={() => this.props.updateCourse(this.state)}>
            update
          </button>
        </td>
      </tr>
    );
  }
}

export default CourseIndexItem;
