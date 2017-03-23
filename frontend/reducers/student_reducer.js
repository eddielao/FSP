import {
  RECEIVE_ALL_STUDENTS,
  RECEIVE_STUDENT,
  REMOVE_STUDENT
} from '../actions/student_actions';
import merge from 'lodash/merge';

const initialState = {};

const StudentReducer = (state=initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_STUDENTS:
      return merge({}, state, action.students);
    case RECEIVE_STUDENT:
      return merge({}, state, {[action.student.id]: action.student});
    case REMOVE_STUDENT:
      let newState = merge({}, state);
      delete newState[action.student.id];
      return newState;
    default:
      return state;
  }
};

export default StudentReducer;
