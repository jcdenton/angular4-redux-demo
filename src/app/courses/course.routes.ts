import { Routes } from '@angular/router';

import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/new', component: CourseComponent },
  { path: 'courses/:id', component: CourseComponent },
];
