import {combineReducers} from 'redux';

import AttendanceReducer from './attendance_reducer';
import CourseReducer from './course_reducer';
import ErrorReducer from './error_reducer';
import GradeReducer from './grade_reducer';
import SessionReducer from './session_reducer';
import StudentReducer from './student_reducer';

const RootReducer = combineReducers({
  attendances: AttendanceReducer,
  courses: CourseReducer,
  errors: ErrorReducer,
  grades: GradeReducer,
  session: SessionReducer,
  students: StudentReducer
});

export default RootReducer;
