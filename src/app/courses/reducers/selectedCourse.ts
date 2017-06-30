import { reduce } from './common';
import { Course } from '../course';
import { COURSE_CLEAR_SELECTION, COURSE_CREATE, COURSE_SELECT, COURSE_SELECT_NEW } from '../course.actions';

const initialState: Course = {
  name: '',
  topics: []
};

function getInitialState() {
  return Object.assign({}, initialState);
}

const selectedCourseReducers = {
  [COURSE_SELECT]: function (state, course) {
    return Object.assign({}, course);
  },

  [COURSE_SELECT_NEW]: getInitialState,

  [COURSE_CLEAR_SELECTION]: getInitialState,

  [COURSE_CREATE]: getInitialState,
};

export function selectedCourse(state = initialState, { type, payload }) {
  return reduce(selectedCourseReducers, state, type, payload);
}
