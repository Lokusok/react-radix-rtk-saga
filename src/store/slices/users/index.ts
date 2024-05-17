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
    // Для корректной типизации при диспатче и передачи в сагу
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchUsersStart: (state, _: PayloadAction<string | undefined>) => {
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
