import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser, TUsersInitialState } from './types';
import { TOrder } from '../search/types';

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
    editUserStart: (state, _: PayloadAction<TUser>) => {
      state.waiting = true;
      state.error = null;
    },
    editUserSuccess: (state, action: PayloadAction<TUser>) => {
      state.list = state.list.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state.waiting = false;
      state.error = null;
    },
    editUserFailure: (state, action: PayloadAction<string>) => {
      state.waiting = false;
      state.error = action.payload;
    },
    reverseByPage: (state, action: PayloadAction<TOrder>) => {
      // just for semantic (in real project we will not use it like in this project)
      if (action.payload === 'default')
        state.list = state.list.slice().reverse();
      else state.list = state.list.slice().reverse();
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
  editUserStart,
  editUserSuccess,
  editUserFailure,
  reverseByPage,
} = usersSlice.actions;

export default usersSlice.reducer;
