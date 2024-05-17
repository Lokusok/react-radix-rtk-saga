import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser, TUsersInitialState } from './types';

const initialState: TUsersInitialState = {
  waiting: false,
  list: [],
  activeUserId: null,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
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
    createUserStart: (state, _: PayloadAction<TUser>) => {
      state.waiting = true;
      state.error = null;
    },
    createUserSuccess: (state, action: PayloadAction<TUser>) => {
      state.list = state.list.concat(action.payload);
      state.waiting = false;
      state.error = null;
    },
    createUserFailure: (state, action: PayloadAction<string>) => {
      state.waiting = false;
      state.error = action.payload;
    },
    deleteUserStart: (state, action: PayloadAction<string>) => {
      state.activeUserId = action.payload;
      state.waiting = true;
      state.error = null;
    },
    deleteUserSuccess: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((user) => user.id !== action.payload);
      state.waiting = false;
      state.error = null;
      state.activeUserId = null;
    },
    deleteUserFailure: (state, action: PayloadAction<string>) => {
      state.waiting = false;
      state.error = action.payload;
      state.activeUserId = null;
    },
    setActiveUserId: (state, action: PayloadAction<string | null>) => {
      state.activeUserId = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  createUserStart,
  createUserSuccess,
  createUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  setActiveUserId,
} = usersSlice.actions;

export default usersSlice.reducer;
