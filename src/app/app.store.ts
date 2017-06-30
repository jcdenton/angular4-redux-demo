import { isDevMode } from '@angular/core';
import { combineReducers, createStore, Reducer, Store } from 'redux';
import * as _ from 'lodash';

import { Course } from './courses/course';
import { courses, coursesFilter, selectedCourse } from './courses/reducers';

export interface AppState {
  courses: Course[];
  coursesFilter: string;
  selectedCourse: Course;
}

const appReducer: Reducer<AppState> = combineReducers<AppState>({ courses, coursesFilter, selectedCourse });

declare const window: any;
const devToolsExtension = isDevMode() && window.devToolsExtension ? window.devToolsExtension() : _.identity;

export const store: Store<AppState> = createStore(appReducer, devToolsExtension);
