import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Course } from './course';
import { addCourses, createCourse, removeCourse, updateCourse } from './course.actions';
import { store } from '../app.store';

@Injectable()
export class CourseService {

  constructor(private http: Http) { }

  private getCourses() {
    return this.http.get('assets/courses.json').map(response => response.json());
  }

  loadCourses(): void {
    this.getCourses().map(addCourses).subscribe(store.dispatch.bind(store));
  }

  saveCourse(course: Course): void {
    if (course.id) {
      store.dispatch(updateCourse(course));
    } else {
      const newCourse = Object.assign({ id: store.getState().courses.length + 1 }, course);
      store.dispatch(createCourse(newCourse));
    }
  }

  removeCourse(course: Course): void {
    store.dispatch(removeCourse(course.id));
  }
}
