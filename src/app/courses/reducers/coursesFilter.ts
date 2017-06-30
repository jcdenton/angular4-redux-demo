import { reduce } from './common';
import { COURSES_FILTER } from '../course.actions';

const coursesFilterReducers = {
  [COURSES_FILTER]: function (state, filterText) {
    return filterText;
  }
};

export function coursesFilter(state = '', { type, payload }) {
  return reduce(coursesFilterReducers, state, type, payload);
}
