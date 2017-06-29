import { Component, OnInit } from '@angular/core';

import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'course-list',
  styles: [`
    button[md-fab].add-course {
      float: right;
    }

    button[md-fab].add-course md-icon {
      vertical-align: middle;
    }
  `],
  template: `
    <md-input-container>
      <input mdInput placeholder="Filter courses" (input)="filterCourses($event)">
    </md-input-container>
    <button md-fab class="add-course" routerLink="/courses/new">
      <md-icon class="material-icons">add</md-icon>
    </button>
    <md-nav-list class="course-list">
      <course-list-item *ngFor="let course of filteredCourses" [course]="course"></course-list-item>
    </md-nav-list>
  `,
})
export class CourseListComponent implements OnInit {
  allCourses: Course[];
  filteredCourses: Course[];

  constructor(private courseService: CourseService) {}

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.allCourses = this.filteredCourses = courses;
    });
  }

  filterCourses(event: KeyboardEvent) {
    const text = (<HTMLInputElement>event.target).value;
    if (!text) {
      this.filteredCourses = this.allCourses;
    } else {
      this.filteredCourses = this.allCourses.filter(course => {
        return course.name.indexOf(text) > -1 || course.topics.findIndex(topic => topic.indexOf(text) > -1) > -1;
      });
    }
  }

  ngOnInit() {
    this.getCourses();
  }
}
