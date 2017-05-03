import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

// const StudentIndexItem = ({ deleteStudent, student, router }) => {
//   return (
//       <tr>
//         <td>{student.fname} {student.lname}</td>
//         <td>{student.email}</td>
//         <td className="remove">
//           <button onClick={() => deleteStudent(student.id)}>remove</button>
//         </td>
//       </tr>
//   );
// };

class StudentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  id: props.student.id,
                  fname: props.student.fname,
                  lname: props.student.lname,
                  email: props.student.email,
                  modalOpen: false
                };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true});
  }

  closeModal() {
    this.setState({ modalOpen: false});
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
          // Removed student causes grade render error
          // <button onClick={() => this.props.deleteStudent(this.state.id)}>
          //   remove
          // </button>
    return (
      <tr>
        <td><input type="text" onChange={this.update('fname')}
          defaultValue={this.state.fname} />
        </td>
        <td><input type="text" onChange={this.update('lname')}
          defaultValue={this.state.lname} />
        </td>
        <td><input type="email" onChange={this.update('email')}
          defaultValue={this.state.email} />
        </td>
        <td className="remove">
          <button onClick={() => this.props.updateStudent(this.state)}>
            update
          </button>
          <button onClick={() => this.openModal()}>
            open
          </button>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
          >
            <input type="text" onChange={this.update('fname')}
              defaultValue={this.state.fname} />
            <input type="text" onChange={this.update('lname')}
              defaultValue={this.state.lname} />
            <input type="email" onChange={this.update('email')}
              defaultValue={this.state.email} />
            <button onClick={() => this.props.updateStudent(this.state)}>
              save
            </button>
          </Modal>
        </td>
      </tr>
    );
  }
}

export default StudentIndexItem;
