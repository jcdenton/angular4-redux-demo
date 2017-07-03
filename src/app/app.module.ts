import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MdCardModule } from '@angular/material';
import { createLogger } from 'redux-logger';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgReduxFormModule } from '@angular-redux/form/dist/source';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found-component';
import { CourseModule } from './courses/course.module';
import { rootReducer, AppState } from './app.store';

const routes: Routes = [
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule,
    NgReduxModule,
    NgReduxFormModule,
    CourseModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>, private devTools: DevToolsExtension) {
    const enhancers = [];
    if (isDevMode() && devTools.isEnabled()) {
      enhancers.push(devTools.enhancer());
    }

    ngRedux.configureStore(rootReducer, {}, [createLogger()], enhancers);
  }
}
