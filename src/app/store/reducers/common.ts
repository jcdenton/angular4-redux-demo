import * as _ from 'lodash';

export function reduce(reducers, state, type, payload) {
  const reducer = reducers[type];
  if (reducer && _.isFunction(reducer)) {
    return reducer(state, payload);
  } else {
    return state;
  }
}
