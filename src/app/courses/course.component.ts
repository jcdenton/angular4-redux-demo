import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'course-form',
  styles: [`
    .course-form {
      width: 100%;
    }

    md-input-container {
      width: 100%;
    }

    md-select {
      width: 100%;
    }

    /* Hack to fix md-select's font-size: 16px; and align with margins introduced with md-input-container */
    :host /deep/ .mat-select-trigger {
      font-size: inherit;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    .buttons-container {
      margin-top: 1em;
    }

    .button-remove {
      float: right;
    }
  `],
  template: `
    <form class="course-form" connect="selectedCourse">
      <div *ngIf="(selectedCourse$ | async).id">
        <md-input-container class="course-form__md-input-container">
          <input mdInput name="id" ngModel placeholder="ID" readonly disabled>
        </md-input-container>
      </div>

      <div>
        <md-input-container class="course-form__md-input-container">
          <input mdInput name="name" ngModel placeholder="Name" required>
        </md-input-container>
      </div>

      <div class="course-form__topic-md-select-container">
        <md-select name="topics" ngModel placeholder="Topics" [multiple]="true">
          <md-option *ngFor="let topic of (allTopics$ | async)" [value]="topic">{{topic}}</md-option>
        </md-select>
      </div>

      <div class="buttons-container">
        <button md-raised-button color="accent" routerLink="/courses" (click)="save()">Save</button>
        <button md-button routerLink="/courses" type="reset">Cancel</button>
        <button md-button routerLink="/courses" type="reset" (click)="remove()" class="button-remove"
                *ngIf="(selectedCourse$ | async).id">Remove
        </button>
      </div>
    </form>
  `,
})
export class CourseComponent {
  @select('selectedCourse') protected selectedCourse$: Observable<Course>;
  @select$('courses', allTopicsTransformer) protected allTopics$: Observable<string[]>;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramsMap => {
      const id = paramsMap.get('id');
      this.courseService.selectCourse(id);
    });
  }

  save() {
    this.selectedCourse$.subscribe(course => {
      this.courseService.saveCourse(course);
      this.courseService.unselectCourse();
    });
  }

  remove() {
    this.selectedCourse$.subscribe(course => {
      this.courseService.removeCourse(course);
      this.courseService.unselectCourse();
    });
  }
}

export function allTopicsTransformer(courses$: Observable<Course[]>): Observable<string[]> {
  return courses$.map(courses => {
    const topics = _.flatMap(courses, course => course.topics);
    return _.uniq(topics).sort();
  });
}
