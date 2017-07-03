import { combineReducers, Reducer } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form/dist/source';

import { Course } from './courses/course';
import { courses, coursesFilter, selectedCourse } from './courses';

export interface AppState {
  courses?: Course[];
  coursesFilter?: string;
  selectedCourse?: Course;
}

const coursesReducer = combineReducers<AppState>({ courses, coursesFilter, selectedCourse });

export const rootReducer: Reducer<AppState> = composeReducers(defaultFormReducer(), coursesReducer);
