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
        <ul>
          {grades.map(grade => <GradeIndexItem
            key={grade.id}
            grade={grade}
            deleteGrade={deleteGrade}
          />)}
        </ul>
      </section>
    );
  }
}

export default GradeIndex;
