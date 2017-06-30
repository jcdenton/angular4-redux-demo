import { Component, OnDestroy, OnInit } from '@angular/core';

import { Course } from './course';
import { filterCourses } from './course.actions';
import { CourseService } from './course.service';
import { store } from '../app.store';

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
      <input mdInput placeholder="Filter courses" (input)="updateCoursesFilter($event)" [value]="coursesFilter">
    </md-input-container>
    <button md-fab class="add-course" routerLink="/courses/new">
      <md-icon class="material-icons">add</md-icon>
    </button>
    <md-nav-list class="course-list">
      <course-list-item *ngFor="let course of filteredCourses" [course]="course"></course-list-item>
    </md-nav-list>
  `,
})
export class CourseListComponent implements OnInit, OnDestroy {
  private unsubscribeFromStore;
  filteredCourses: Course[];
  coursesFilter: string;

  constructor(private courseService: CourseService) {
    this.unsubscribeFromStore = store.subscribe(this.updateFromState.bind(this));
    this.updateFromState();
  }

  updateFromState() {
    const allCourses = store.getState().courses;

    this.coursesFilter = store.getState().coursesFilter;
    const filterText = this.coursesFilter.toLowerCase();

    this.filteredCourses = allCourses.filter(course => {
      return course.name.toLowerCase().indexOf(filterText) > -1
        || course.topics.findIndex(topic => topic.toLowerCase().indexOf(filterText) > -1) > -1;
    });
  }

  updateCoursesFilter(event: KeyboardEvent) {
    const filterText = (<HTMLInputElement>event.target).value;
    store.dispatch(filterCourses(filterText));
  }

  ngOnInit() {
    // this.courseService.loadCourses();
  }

  ngOnDestroy() {
    this.unsubscribeFromStore();
  }
}
