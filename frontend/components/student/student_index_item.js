import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import { style } from '../modal/modal_style';

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
    this.updateClose = this.updateClose.bind(this);
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

  updateClose() {
    this.props.updateStudent(this.state)
      .then(this.setState({ modalOpen: false}));
  }

  render() {
          // Removed student causes grade render error
          // <button onClick={() => this.props.deleteStudent(this.state.id)}>
          //   remove
          // </button>
    return (
      <tr>
        <td>{this.props.student.fname}</td>
        <td>{this.props.student.lname}</td>
        <td>{this.props.student.email}</td>
        <td>
          <button onClick={() => this.openModal()}>
            edit
          </button>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={style}
            contentLabel="Modal">
            <div className="modalInput">
              <input type="text" onChange={this.update('fname')}
                defaultValue={this.state.fname} />
              <input type="text" onChange={this.update('lname')}
                defaultValue={this.state.lname} />
              <input type="email" onChange={this.update('email')}
                defaultValue={this.state.email} />
            </div>
            <div className="modalButton">
              <button onClick={() => this.updateClose()}>
                save
              </button>
              <button onClick={() => this.closeModal()}>
                close
              </button>
            </div>
          </Modal>
        </td>
      </tr>
    );
  }
}

export default StudentIndexItem;
