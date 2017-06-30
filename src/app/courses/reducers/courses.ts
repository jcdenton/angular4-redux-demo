import { reduce } from './common';

import { Course } from '../course';

function findCourseIndexById(courses: Course[], courseId: number) {
  return courses.findIndex(course => course.id === courseId);
}

const coursesReducers = {
  COURSES_ADD: function (state: Course[], courses) {
    return [...state, ...courses];
  },

  COURSES_UPDATE: function (state: Course[], course) {
    const courseIndex = findCourseIndexById(state, course.id);
    return state.slice().splice(courseIndex, 1, course);
  },

  COURSES_REMOVE: function (state: Course[], courseId) {
    return state.filter(course => course.id !== courseId);
  }
};

export function courses(state = [], { type, payload }) {
  return reduce(coursesReducers, state, type, payload);
}
