import { connect } from 'react-redux';
import GradeIndex from './grade_index';
import {
  fetchAllGrades,
  deleteGrade } from '../../actions/grade_actions';
import { selectAllGrades } from '../../reducers/grade_selectors';

const mapStateToProps = state => ({
  grades: selectAllGrades(state.grades)
});

const mapDispatchToProps = dispatch => ({
  deleteGrade: id => dispatch(deleteGrade(id)),
  fetchAllGrades: () => dispatch(fetchAllGrades())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GradeIndex);
