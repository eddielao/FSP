import React from 'react';
import ReactDOM from 'react-redux';
import { Link } from 'react-router';
import Modal from '../modal/modal';

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
    this.state = props.student;
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  showModal() {

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
          <button onClick={() => this.showModal()}>modal</button>
        </td>
      </tr>
    );
  }
}

export default StudentIndexItem;
