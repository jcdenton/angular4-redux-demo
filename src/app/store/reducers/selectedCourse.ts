import { reduce } from './common';
import { COURSE_CLEAR_SELECTION, COURSE_CREATE, COURSE_SELECT, COURSE_SELECT_NEW } from '../../courses';

export const selectedCourseInitialState = {
  name: '',
  topics: [] as string[]
};

function getInitialState(state) {
  return selectedCourseInitialState;
}

const selectedCourseReducers = {
  [COURSE_CLEAR_SELECTION]: getInitialState,

  [COURSE_SELECT_NEW]: getInitialState,

  [COURSE_CREATE]: getInitialState,
};

export function selectedCourse(state = selectedCourseInitialState, { type, payload }) {
  return reduce(selectedCourseReducers, state, type, payload);
}

export function selectedCourseRootReducer(state, { type, payload }) {
  if (type === COURSE_SELECT) {
    const course = state.courses.find(c => c.id === payload);
    return Object.assign({}, state, { selectedCourse: course });
  }
  return state;
}
