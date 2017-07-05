import { Component, Input } from '@angular/core';

import { Course } from './course';
import { CourseActions } from './course.actions';

@Component({
  selector: 'course-list-item',
  styles: [`
    md-icon {
      color: rgba(0, 0, 0, 0.54);
    }

    md-list-item md-chip-list.course-list-item__topics-chips {
      margin-top: 0.3em;
    }
  `],
  template: `
    <md-divider></md-divider>
    <md-list-item routerLink="/courses/{{course.id}}" (click)="selectCourse()">
      <md-icon md-list-icon class="material-icons">library_books</md-icon>
      <h3 md-line> {{ course.name }} </h3>
      <md-chip-list md-line class="course-list-item__topics-chips" *ngIf="!!course.topics">
        <md-chip *ngFor="let topic of course.topics">{{ topic }}</md-chip>
      </md-chip-list>
    </md-list-item>
  `,
})
export class CourseListItemComponent {
  @Input() protected course: Course;

  constructor(private courseActions: CourseActions) { }

  private selectCourse() {
    // this.courseActions.selectCourse(this.course.id);
  }
}
