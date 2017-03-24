import React, { Component } from 'react';
import StudentIndexItem from './student_index_item';

class StudentIndex extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
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
              updateStudent={updateStudent}
              />)}
          </tbody>
        </table>
      </section>
    );
  }
}

export default StudentIndex;
