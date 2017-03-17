import {combineReducers} from 'redux';

import CourseReducer from './course_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  course: CourseReducer,
  session: SessionReducer
});

export default RootReducer;
