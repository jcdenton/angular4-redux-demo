import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Course } from './course';
import { CourseActions } from './course.actions';

@Injectable()
export class CourseService {

  constructor(private http: Http, private courseActions: CourseActions) { }

  private getCourses() {
    return this.http.get('assets/courses.json').map(response => response.json());
  }

  fetchCourses(): void {
    this.getCourses().subscribe(courses => this.courseActions.coursesFetch(courses));
  }

  saveCourse(course: Course): void {
    if (course.id) {
      this.courseActions.updateCourse(course);
    } else {
      this.courseActions.createCourse(course);
    }
  }
}
