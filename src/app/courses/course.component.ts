import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'course-form',
  styles: [`
    .course-form__form {
      width: 100%;
    }

    .course-form__md-input-container {
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

    .course-form__buttons-container {
      margin-top: 1em;
    }

    .course-form__button-remove {
      float: right;
    }
  `],
  template: `
    <form class="course-form__form">
      <div *ngIf="course.id">
        <md-input-container class="course-form__md-input-container">
          <input mdInput placeholder="ID" name="id" disabled value="{{course.id}}">
        </md-input-container>
      </div>

      <div>
        <md-input-container class="course-form__md-input-container">
          <input mdInput placeholder="Name" name="name" required [(ngModel)]="course.name">
        </md-input-container>
      </div>

      <div class="course-form__topic-md-select-container">
        <md-select name="topics" [multiple]="true" [(ngModel)]="course.topics" placeholder="Topics">
          <md-option *ngFor="let topic of allTopics" [value]="topic">{{topic}}</md-option>
        </md-select>
      </div>

      <div class="course-form__buttons-container">
        <button md-raised-button color="accent" (click)="save()">Save</button>
        <button md-button routerLink="/courses" type="reset">Cancel</button>
        <button *ngIf="course.id" md-button type="reset" (click)="remove()" class="course-form__button-remove">Remove
        </button>
      </div>
    </form>
  `,
})
export class CourseComponent implements OnInit {
  protected course: Course;
  protected allTopics: string[];

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {
  }

  ngOnInit() {
    const courseId = +this.route.snapshot.params['id'];
    if (courseId) {
      this.courseService.getCourse(courseId).subscribe(course => this.course = course);
    } else {
      this.course = {
        name: '',
        topics: []
      }
    }

    this.courseService.getAllTopics().subscribe(topics => this.allTopics = topics);
  }

  save() {
    this.courseService.saveCourse(this.course).subscribe(() => this.router.navigateByUrl('/courses'));
  }

  remove() {
    this.courseService.removeCourse(this.course).subscribe(() => this.router.navigateByUrl('/courses'));
  }
}
