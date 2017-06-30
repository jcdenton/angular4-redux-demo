import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdInputModule,
  MdListModule,
  MdSelectModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CourseComponent, CourseListComponent, CourseListItemComponent, CourseService } from './courses';

@NgModule({
  entryComponents: [
    CourseComponent
  ],
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseListItemComponent,
    CourseComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdCardModule,
    MdListModule,
    MdInputModule,
    MdChipsModule,
    MdButtonModule,
    MdSelectModule,
    HttpModule,
  ],
  providers: [
    CourseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
