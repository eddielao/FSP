import React, { Component } from 'react';
import GradeIndexItem from './grade_index_item';

class GradeIndex extends Component {
  componentDidMount() {
    this.props.fetchAllGrades();
  }

  render() {
    const { grades, deleteGrade, children } = this.props;
    return (
      <section className="item-index">
        <table>
          <thead>
            <tr>
              <th>Grade</th>
              <th>Course ID</th>
              <th>Student ID</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {grades.map(grade => <GradeIndexItem
              key={grade.id}
              grade={grade}
              deleteGrade={deleteGrade}
            />)}
          </tbody>
        </table>
      </section>
    );
  }
}

export default GradeIndex;
