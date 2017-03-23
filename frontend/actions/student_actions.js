import * as StudentAPIUtil from '../util/student_api_util';
import { receiveErrors } from './error_actions';
export const RECEIVE_ALL_STUDENTS = "RECEIVE_ALL_STUDENTS";
export const RECEIVE_STUDENT = "RECEIVE_STUDENT";
export const REMOVE_STUDENT = "REMOVE_STUDENT";

export const receiveAllStudents = students => ({
  type: RECEIVE_ALL_STUDENTS,
  students
});

export const fetchAllStudents = () => dispatch => (
  StudentAPIUtil.fetchAllStudents()
    .then(students => dispatch(receiveAllStudents(students)))
);

export const receiveStudent = student => ({
  type: RECEIVE_STUDENT,
  student
});

export const fetchStudent = id => dispatch => (
  StudentAPIUtil.fetchStudent(id)
    .then(student => dispatch(receiveStudent(student)))
);

export const createStudent = student => dispatch => (
  StudentAPIUtil.createStudent(student)
    .then(createdStudent => dispatch(receiveStudent(createdStudent)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const removeStudent = student => ({
  type: REMOVE_STUDENT,
  student
});

export const deleteStudent = id => dispatch => (
    StudentAPIUtil.deleteStudent(id)
    .then(student => dispatch(removeStudent(student)))
);
