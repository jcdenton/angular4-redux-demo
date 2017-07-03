import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdChipsModule, MdInputModule, MdListModule, MdSelectModule } from '@angular/material';
import { NgReduxFormModule } from '@angular-redux/form/dist/source';

import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list.component';
import { CourseListItemComponent } from './course-list-item.component';
import { CourseActions } from './course.actions';
import { CourseService } from './course.service';
import { routes } from './course.routes';


@NgModule({
  entryComponents: [
    CourseComponent
  ],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    CourseComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MdListModule,
    MdInputModule,
    MdChipsModule,
    MdButtonModule,
    MdSelectModule,
    NgReduxFormModule,
  ],
  providers: [
    CourseService,
    CourseActions,
  ],
})
export class CourseModule {
  constructor(private courseService: CourseService) {
    this.courseService.fetchCourses();
  }
}
