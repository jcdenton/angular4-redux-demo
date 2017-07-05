import { isDevMode, NgModule } from '@angular/core';
import { composeReducers, defaultFormReducer, NgReduxFormModule } from '@angular-redux/form';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { combineReducers, Reducer } from 'redux';
import { createLogger } from 'redux-logger';

import { Course } from '../courses';
import {
  courses,
  coursesFilter,
  coursesFilterInitialState,
  coursesInitialState,
  selectedCourse,
  selectedCourseInitialState,
  selectedCourseRootReducer
} from './reducers';

export interface AppState {
  courses: Course[];
  coursesFilter: string;
  selectedCourse?: Course;
}

export const INITIAL_STATE: AppState = {
  courses: coursesInitialState,
  coursesFilter: coursesFilterInitialState,
  selectedCourse: selectedCourseInitialState,
};

const nestedReducers = { courses, coursesFilter, selectedCourse };
const rootReducers = [defaultFormReducer(), selectedCourseRootReducer];

const middlewares = [];

const enhancers = [];

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxFormModule,
  ],
  exports: [
    NgReduxModule,
    NgReduxFormModule,
  ],
})
export class StoreModule {
  constructor(private ngRedux: NgRedux<AppState>, private devTools: DevToolsExtension) {
    const reducer: Reducer<AppState> = composeReducers(...rootReducers, combineReducers(nestedReducers));

    if (isDevMode()) {
      middlewares.push(createLogger());

      if (devTools.isEnabled()) {
        enhancers.push(devTools.enhancer());
      }
    }

    ngRedux.configureStore(reducer, INITIAL_STATE, middlewares, enhancers);
  }
}
