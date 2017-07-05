import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Course } from './course';
import { CourseActions } from './course.actions';

const URL = 'assets/courses.json';

@Injectable()
export class CourseService {

  constructor(private http: Http, private courseActions: CourseActions) { }

  private getCourses() {
    return this.http.get(URL).map(response => response.json());
  }

  fetchCourses(): void {
    this.getCourses().subscribe(courses => this.courseActions.coursesFetch(courses));
  }

  selectCourse(id: string) {
    if (id === 'new') {
      this.courseActions.selectNewCourse();
    } else {
      this.courseActions.selectCourse(+id);
    }
  }

  unselectCourse() {
    this.courseActions.clearCourseSelection();
  }

  saveCourse(course: Course): void {
    if (course.id) {
      this.courseActions.updateCourse(course);
    } else {
      this.courseActions.createCourse(course);
    }
  }

  removeCourse(course: Course): void {
    this.courseActions.removeCourse(course.id);
  }
}
