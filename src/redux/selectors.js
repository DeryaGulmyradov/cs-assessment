import { createSelector } from 'reselect';

export const userState = (state) => state.user;

export const counterValueSelector = createSelector(userState, (user) => user.value);

export const userDataSelector = createSelector(userState, (user) => user.userData);
