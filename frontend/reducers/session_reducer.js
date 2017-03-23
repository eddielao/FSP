import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let errors;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case LOGOUT:
      return merge({}, _nullUser);
    // case RECEIVE_SESSION_ERRORS:
    //   errors = action.errors;
    //   return merge({}, state, {
    //     errors
    //   });
    // case CLEAR_SESSION_ERRORS:
    //   return merge({}, _nullUser);
    default:
      return state;
  }
};

export default SessionReducer;
