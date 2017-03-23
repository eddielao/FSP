import * as AttendanceAPIUtil from '../util/attendance_api_util';
import { receiveErrors } from './error_actions';
export const RECEIVE_ALL_ATTENDANCES = "RECEIVE_ALL_ATTENDANCES";
export const RECEIVE_ATTENDANCE = "RECEIVE_ATTENDANCE";
export const REMOVE_ATTENDANCE = "REMOVE_ATTENDANCE";

export const receiveAllAttendances = attendances => ({
  type: RECEIVE_ALL_ATTENDANCES,
  attendances
});

export const fetchAllAttendances = () => dispatch => (
  AttendanceAPIUtil.fetchAllAttendances()
    .then(attendances => dispatch(receiveAllAttendances(attendances)))
);

export const receiveAttendance = attendance => ({
  type: RECEIVE_ATTENDANCE,
  attendance
});

export const fetchAttendance = id => dispatch => (
  AttendanceAPIUtil.fetchAttendance(id)
    .then(attendance => dispatch(receiveAttendance(attendance)))
);

export const createAttendance = attendance => dispatch => (
  AttendanceAPIUtil.createAttendance(attendance)
    .then(createdAttendance => dispatch(receiveAttendance(createdAttendance)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const removeAttendance = attendance => ({
  type: REMOVE_ATTENDANCE,
  attendance
});

export const deleteAttendance = id => dispatch => (
  AttendanceAPIUtil.deleteAttendance(id)
    .then(attendance => dispatch(removeAttendance(attendance)))
);
