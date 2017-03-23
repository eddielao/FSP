import * as GradeAPIUtil from '../util/grade_api_util';
import { receiveErrors } from './error_actions';
export const RECEIVE_ALL_GRADES = "RECEIVE_ALL_GRADES";
export const RECEIVE_GRADE = "RECEIVE_GRADE";
export const REMOVE_GRADE = "REMOVE_GRADE";

export const receiveAllGrades = grades => ({
  type: RECEIVE_ALL_GRADES,
  grades
});

export const fetchAllGrades = () => dispatch => (
  GradeAPIUtil.fetchAllGrades()
    .then(grades => dispatch(receiveAllGrades(grades)))
);

export const receiveGrade = grade => ({
  type: RECEIVE_GRADE,
  grade
});

export const fetchGrade = id => dispatch => (
  GradeAPIUtil.fetchGrade(id)
    .then(grade => dispatch(receiveGrade(grade)))
);

export const createGrade = grade => dispatch => (
  GradeAPIUtil.createGrade(grade)
    .then(createdGrade => dispatch(receiveGrade(createdGrade)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const removeGrade = grade => ({
  type: REMOVE_GRADE,
  grade
});

export const deleteGrade = id => dispatch => (
  GradeAPIUtil.deleteGrade(id)
    .then(grade => dispatch(removeGrade(grade)))
);
