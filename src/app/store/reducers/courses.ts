import { reduce } from './common';
import { Course, COURSE_CREATE, COURSE_REMOVE, COURSE_UPDATE, COURSES_ADD, COURSES_FETCH } from '../../courses';

export const coursesInitialState = [];

const coursesReducers = {
  [COURSES_ADD]: function (state: Course[], courses) {
    return [...state, ...courses];
  },

  [COURSES_FETCH]: function (state: Course[], courses) {
    return [...courses];
  },

  [COURSE_CREATE]: function (state: Course[], course) {
    const newCourse = Object.assign({}, course, { id: state.length + 1 });
    return [...state, newCourse];
  },

  [COURSE_UPDATE]: function (state: Course[], updatedCourse) {
    return state.map(course => course.id === updatedCourse.id ? updatedCourse : course);
  },

  [COURSE_REMOVE]: function (state: Course[], courseId) {
    return state.filter(course => course.id !== courseId);
  }
};

export function courses(state = coursesInitialState, { type, payload }) {
  return reduce(coursesReducers, state, type, payload);
}
