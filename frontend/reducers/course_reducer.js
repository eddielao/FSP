import {
  RECEIVE_ALL_COURSES,
  RECEIVE_COURSE,
  REMOVE_COURSE
} from '../actions/course_actions';
import { RECEIVE_ERRORS } from '../actions/error_actions';
import merge from 'lodash/merge';

const initialState = {
};

const CourseReducer = (state=initialState, action) => {
  Object.freeze(state);
  let errors;
  switch (action.type) {
    case RECEIVE_ALL_COURSES:
      return merge({}, state, action.courses);
    case RECEIVE_COURSE:
      return merge({}, state, {[action.course.id]: action.course});
    case REMOVE_COURSE:
      let newState = merge({}, state);
      delete newState[action.course.id];
      return newState;
    default:
      return state;
  }
};

export default CourseReducer;
