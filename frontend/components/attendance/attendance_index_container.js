import { connect } from 'react-redux';
import AttendanceIndex from './attendance_index';
import {
  fetchAllAttendances,
  deleteAttendance } from '../../actions/attendance_actions';
import { selectAllAttendances } from '../../reducers/attendance_selectors';

const mapStateToProps = state => ({
  attendances: selectAllAttendances(state.attendances)
});

const mapDispatchToProps = dispatch => ({
  deleteAttendance: id => dispatch(deleteAttendance(id)),
  fetchAllAttendances: () => dispatch(fetchAllAttendances())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceIndex);
