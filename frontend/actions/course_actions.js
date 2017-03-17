import * as CourseAPIUtil from '../util/course_api_util';

export const RECEIVE_ALL_COURSES = "RECEIVE_ALL_COURSES";
export const RECEIVE_COURSE = "RECEIVE_COURSE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_COURSE = "REMOVE_COURSE";

export const receiveAllCourses = courses => ({
  type: RECEIVE_ALL_COURSES,
  courses
});

export const fetchAllCourses = () => dispatch => (
  CourseAPIUtil.fetchAllCourses()
    .then(courses => dispatch(receiveAllCourses(courses)))
);

export const receiveCourse = course => ({
  type: RECEIVE_COURSE,
  course
});

export const fetchCourse = id => dispatch => (
  CourseAPIUtil.fetchCourse(id)
    .then(course => dispatch(receiveCourse(course)))
);

export const createCourse = course => dispatch => (
  CourseAPIUtil.createCourse(course)
    .then(createdCourse => dispatch(receiveCourse(createCourse)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeCourse = course => ({
  type: REMOVE_COURSE,
  course
});

export const deleteCourse = id => dispatch => (
  CourseAPIUtil.deleteCourse(id)
);
