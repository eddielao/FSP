import React, { Component } from 'react';
import StudentIndexItem from './student_index_item';
import Modal from 'react-modal';

class StudentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {modalOpen: false};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllStudents();
  }

  handleClick() {
    this.setState({ modalOpen: true});
  }

  render() {
    const { deleteStudent, students, updateStudent, children } = this.props;
    return (
      <section className="item-index">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th className="remove"> </th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => <StudentIndexItem
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
              handleClick={this.handleClick}
              updateStudent={updateStudent}
              />)}
          </tbody>
        </table>
        <Modal
          isOpen={this.state.modalOpen}
        >
          ...content
        </Modal>
      </section>
    );
  }
}

export default StudentIndex;
