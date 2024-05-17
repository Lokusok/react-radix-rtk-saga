import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser, TUsersInitialState } from './types';

const initialState: TUsersInitialState = {
  waiting: false,
  list: [],
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.waiting = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action: PayloadAction<TUser[]>) => {
      state.list = action.payload;
      state.waiting = false;
      state.error = null;
    },
    fetchUsersFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.waiting = false;
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } =
  usersSlice.actions;

export default usersSlice.reducer;
