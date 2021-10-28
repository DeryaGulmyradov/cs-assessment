import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    firstName: 'John',
    lastName: 'Harris',
    hourlyRate: '$55',
  },
  counter: 12,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      const { firstName, lastName, hourlyRate } = action.payload;
      state.userData = {
        firstName,
        lastName,
        hourlyRate,
      };
    },
    updateCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { updateUserData, updateCounter } = userSlice.actions;
export const userReducer = userSlice.reducer;
