import { Injectable } from '@angular/core';
import { AppState } from '../app.store';
import { NgRedux } from '@angular-redux/store';
import { Course } from './course';

export const COURSES_ADD = 'COURSES_ADD';
export const COURSES_FILTER = 'COURSES_FILTER';
export const COURSES_FETCH = 'COURSES_FETCH';
export const COURSE_SELECT = 'COURSE_SELECT';
export const COURSE_SELECT_NEW = 'COURSE_SELECT_NEW';
export const COURSE_CREATE = 'COURSE_CREATE';
export const COURSE_UPDATE = 'COURSE_UPDATE';
export const COURSE_REMOVE = 'COURSE_REMOVE';
export const COURSE_CLEAR_SELECTION = 'COURSE_CLEAR_SELECTION';

@Injectable()
export class CourseActions {
  constructor(private ngRedux: NgRedux<AppState>) { }

  coursesFetch(courses: Course[]) {
    return this.ngRedux.dispatch({ type: COURSES_FETCH, payload: courses });
  }

  addCourses(courses: Course[]) {
    return this.ngRedux.dispatch({ type: COURSES_ADD, payload: courses });
  }

  filterCourses(filterText: string) {
    return this.ngRedux.dispatch({ type: COURSES_FILTER, payload: filterText });
  }

  selectCourse(course: Course) {
    return this.ngRedux.dispatch({ type: COURSE_SELECT, payload: course });
  }

  createNewCourse() {
    return this.ngRedux.dispatch({ type: COURSE_SELECT_NEW });
  }

  createCourse(course: Course) {
    return this.ngRedux.dispatch({ type: COURSE_CREATE, payload: course });
  }

  updateCourse(course: Course) {
    return this.ngRedux.dispatch({ type: COURSE_UPDATE, payload: course });
  }

  removeCourse(courseId: number) {
    return this.ngRedux.dispatch({ type: COURSE_REMOVE, payload: courseId });
  }

  clearCourseSelection() {
    return this.ngRedux.dispatch({ type: COURSE_CLEAR_SELECTION });
  }
}
