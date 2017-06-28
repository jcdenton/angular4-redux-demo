import { Component, Input, OnInit } from '@angular/core';
import { Course } from './course';
import { MdListItem } from '@angular/material';

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
    <md-list-item routerLink="/courses/{{course.id}}">
      <md-icon md-list-icon class="material-icons">library_books</md-icon>
      <h3 md-line> {{ course.name }} </h3>
      <md-chip-list md-line class="course-list-item__topics-chips" *ngIf="!!course.topics">
        <md-chip *ngFor="let topic of course.topics">{{ topic }}</md-chip>
      </md-chip-list>
    </md-list-item>
  `,
})
export class CourseListItemComponent extends MdListItem implements OnInit {
  @Input() course: Course;

  ngOnInit() {
  }
}
