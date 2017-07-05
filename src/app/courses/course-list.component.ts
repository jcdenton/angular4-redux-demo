import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { Course } from './course';
import { CourseActions } from './course.actions';
import { AppState } from '../store';

@Component({
  selector: 'course-list',
  styles: [`
    .filter-container {
      width: 50%;
    }

    .float-right {
      float: right;
    }

    .no-courses {
      margin-top: 1em;
      text-align: center;
    }

    button[md-fab] md-icon {
      vertical-align: middle;
    }
  `],
  template: `
    <md-input-container class="filter-container">
      <input mdInput placeholder="Filter courses" (input)="updateCoursesFilter($event)">
    </md-input-container>
    <button md-fab class="float-right" routerLink="/courses/new">
      <md-icon class="material-icons">add</md-icon>
    </button>
    <md-nav-list class="course-list">
      <course-list-item *ngFor="let course of (filteredCourses$ | async)" [course]="course"></course-list-item>
      <div *ngIf="(filteredCourses$ | async).length === 0" class="no-courses">
        <md-divider></md-divider>
        <h3>No courses to display</h3>
      </div>
    </md-nav-list>
  `,
})
export class CourseListComponent {
  protected filteredCourses$: Observable<Course[]>;

  constructor(private courseActions: CourseActions, private ngRedux: NgRedux<AppState>) {
    this.filteredCourses$ = ngRedux.select(this.filteredCoursesSelector);
  }

  private updateCoursesFilter(event: KeyboardEvent) {
    const filterText = (<HTMLInputElement>event.target).value;
    this.courseActions.filterCourses(filterText);
  }

  private filteredCoursesSelector(state) {
    return state.courses.filter(course => {
      const filterText = state.coursesFilter.toLowerCase();

      return course.name.toLowerCase().indexOf(filterText) > -1
        || course.topics.findIndex(topic => topic.toLowerCase().indexOf(filterText) > -1) > -1;
    })
  }
}
