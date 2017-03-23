import {
  RECEIVE_ALL_ATTENDANCES,
  RECEIVE_ATTENDANCE,
  RECEIVE_ERRORS,
  REMOVE_ATTENDANCE
} from '../actions/attendance_actions';
import merge from 'lodash/merge';

const initialState = {};

const AttendanceReducer = (state=initialState, action) => {
  Object.freeze(state);
  let errors;
  switch (action.type) {
    case RECEIVE_ALL_ATTENDANCES:
      return merge({}, state, action.attendances);
    case RECEIVE_ATTENDANCE:
      return merge({}, state, {[action.attendance.id]: action.attendance});
    case REMOVE_ATTENDANCE:
      let newState = merge({}, state);
      delete newState[action.attendance.id];
      return newState;
    default:
      return state;
  }
};

export default AttendanceReducer;
