import {
  RECEIVE_ALL_GRADES,
  RECEIVE_GRADE,
  REMOVE_GRADE
} from '../actions/grade_actions';
import merge from 'lodash/merge';

const initialState = {
};

const GradeReducer = (state=initialState, action) => {
  Object.freeze(state);
  let errors;
  switch (action.type) {
    case RECEIVE_ALL_GRADES:
      return merge({}, state, action.grades);
    case RECEIVE_GRADE:
      return merge({}, state, {[action.grade.id]: action.grade});
    case REMOVE_GRADE:
      let newState = merge({}, state);
      delete newState[action.grade.id];
      return newState;
    default:
      return state;
  }
};

export default GradeReducer;
