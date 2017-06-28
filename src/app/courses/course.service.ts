import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinct';
import * as _ from 'lodash';

const allCourses = [
  {
    'id': 1,
    'name': 'Building Apps with React',
    'topics': ['ReactJS']
  },
  {
    'id': 2,
    'name': 'Building Apps with Angular',
    'topics': ['AngularJS']
  },
  {
    'id': 3,
    'name': 'Building Apps with Angular and Redux',
    'topics': ['AngularJS', 'Redux']
  }
];

@Injectable()
export class CourseService {

  constructor() { }


  getCourses(): Observable<Course[]> {
    return Observable.of(allCourses);
  }

  getCourse(courseId: number): Observable<Course> {
    return this.getCourses().map(courses => this.findCourseById(courses, courseId));
  }

  getAllTopics(): Observable<string[]> {
    return this.getCourses()
      .map(courses => {
        const topics = _.flatMap(courses.map(course => course.topics));
        return _.uniq(topics).sort();
      });
  }

  saveCourse(course: Course): Observable<Course[]> {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.insertCourse(course);
    }
    return this.getCourses();
  }

  removeCourse(course: Course): Observable<Course[]> {
    const courseIndex = allCourses.findIndex(c => c.id === course.id);
    allCourses.splice(courseIndex, 1);
    return this.getCourses();
  }

  private updateCourse(course: Course) {
    Object.assign(this.findCourseById(allCourses, course.id), course);
  }

  private insertCourse(course: Course) {
    const newCourse = Object.assign({ 'id': allCourses.length + 1 }, course);
    allCourses.push(newCourse);
  }

  private findCourseById(courses: Course[], courseId: number) {
    return courses.find(course => course.id === courseId);
  }
}
