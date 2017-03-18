import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_SESSION_ERRORS
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(suser => dispatch(receiveCurrentUser(suser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(luser => dispatch(receiveCurrentUser(luser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);
