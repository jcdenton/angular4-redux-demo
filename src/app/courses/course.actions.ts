export const COURSES_ADD = 'COURSES_ADD';
export const COURSES_FILTER = 'COURSES_FILTER';
export const COURSE_SELECT = 'COURSE_SELECT';
export const COURSE_SELECT_NEW = 'COURSE_SELECT_NEW';
export const COURSE_CREATE = 'COURSE_CREATE';
export const COURSE_UPDATE = 'COURSE_UPDATE';
export const COURSE_REMOVE = 'COURSE_REMOVE';
export const COURSE_CLEAR_SELECTION = 'COURSE_CLEAR_SELECTION';

export function addCourses(courses) {
  return { type: COURSES_ADD, payload: courses };
}

export function filterCourses(filterText) {
  return { type: COURSES_FILTER, payload: filterText };
}

export function selectCourse(course) {
  return { type: COURSE_SELECT, payload: course };
}

export function createNewCourse() {
  return { type: COURSE_SELECT_NEW };
}

export function createCourse(course) {
  return { type: COURSE_CREATE, payload: course };
}

export function updateCourse(course) {
  return { type: COURSE_UPDATE, payload: course };
}

export function removeCourse(courseId) {
  return { type: COURSE_REMOVE, payload: courseId };
}

export function clearCourseSelection() {
  return { type: COURSE_CLEAR_SELECTION };
}
