import { reduce } from './common';
import { COURSES_FILTER } from '../../courses';

export const coursesFilterInitialState = '';

const coursesFilterReducers = {
  [COURSES_FILTER]: function (state, filterText) {
    return filterText;
  }
};

export function coursesFilter(state = coursesFilterInitialState, { type, payload }) {
  return reduce(coursesFilterReducers, state, type, payload);
}
