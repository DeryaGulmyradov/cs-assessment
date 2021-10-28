import { createSelector } from 'reselect';

export const userState = (state) => state.user;

export const userDataSelector = createSelector(userState, (user) => user.userData);

export const counterSelector = createSelector(userState, (user) => user.counter);

