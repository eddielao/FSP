import React, { Component } from 'react';
import StudentIndexItem from './student_index_item';

class StudentIndex extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    const { deleteStudent, students, children } = this.props;
    return (
      <section className="item-index">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => <StudentIndexItem
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
              />)}
          </tbody>
        </table>
      </section>
    );
  }
}

export default StudentIndex;
