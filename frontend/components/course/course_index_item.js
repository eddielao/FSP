import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import { style } from '../modal/modal_style';

class CourseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  id: props.course.id,
                  title: props.course.title,
                  modalOpen: false
                };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateField=this.updateField.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true});
  }

  closeModal() {
    this.setState({ modalOpen: false});
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
