export const COURSES_ADD = 'COURSES_ADD';
export const COURSES_FILTER = 'COURSES_FILTER';
export const COURSES_UPDATE = 'COURSES_UPDATE';
export const COURSES_REMOVE = 'COURSES_REMOVE';
export const COURSE_SELECT = 'COURSE_SELECT';
export const COURSE_SELECT_NEW = 'COURSE_SELECT_NEW';

export function addCourses(courses) {
  return { type: COURSES_ADD, payload: courses };
}

export function filterCourses(filterText) {
  return { type: COURSES_FILTER, payload: filterText };
}

export function updateCourse(course) {
  return { type: COURSES_UPDATE, payload: course };
}

export function removeCourse(courseId) {
  return { type: COURSES_REMOVE, payload: courseId };
}

export function selectCourse(course) {
  return { type: COURSE_SELECT, payload: course };
}

export function selectNewCourse() {
  return { type: COURSE_SELECT_NEW };
}
