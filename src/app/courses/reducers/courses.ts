import { reduce } from './common';

import { Course } from '../course';
import { COURSE_CREATE, COURSE_REMOVE, COURSE_UPDATE, COURSES_ADD } from '../course.actions';

const coursesReducers = {
  [COURSES_ADD]: function (state: Course[], courses) {
    return [...state, ...courses];
  },

  [COURSE_CREATE]: function (state: Course[], course) {
    return [...state, course];
  },

  [COURSE_UPDATE]: function (state: Course[], updatedCourse) {
    return state.map(course => course.id === updatedCourse.id ? updatedCourse : course);
  },

  [COURSE_REMOVE]: function (state: Course[], courseId) {
    return state.filter(course => course.id !== courseId);
  }
};

export function courses(state = [], { type, payload }) {
  return reduce(coursesReducers, state, type, payload);
}
