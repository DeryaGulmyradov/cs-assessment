import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    firstName: 'John',
    lastName: 'Harris',
    hourlyRate: '$55',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { updateUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
