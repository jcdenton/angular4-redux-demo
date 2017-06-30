import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinct';
import * as _ from 'lodash';

import { Course } from './course';
import { addCourses, removeCourse, updateCourse } from './course.actions';
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

  getCourse(courseId: number): Observable<Course> {
    return Observable.of(this.findCourseById(store.getState().courses, courseId));
  }

  getAllTopics(): Observable<string[]> {
    const courses = store.getState().courses;
    const topics = _.flatMap(courses.map(course => course.topics));
    return Observable.of(_.uniq(topics).sort());
  }

  saveCourse(course: Course): void {
    if (course.id) {
      store.dispatch(updateCourse(course));
    } else {
      store.dispatch(addCourses([course]));
    }
  }

  removeCourse(course: Course): void {
    store.dispatch(removeCourse(course.id));
  }

  private findCourseById(courses: Course[], courseId: number) {
    return courses.find(course => course.id === courseId);
  }
}
