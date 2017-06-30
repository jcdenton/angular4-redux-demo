import { reduce } from './common';

const coursesFilterReducers = {
  COURSES_FILTER: function (state, filterText) {
    return filterText;
  }
};

export function coursesFilter(state = '', { type, payload }) {
  return reduce(coursesFilterReducers, state, type, payload);
}
