import { createSelector } from 'reselect';

export const counterSelector = (state) => state.counter;

export const counterValueSelector = createSelector(counterSelector, (counter) => counter.value);
