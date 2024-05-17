import { put, call } from 'redux-saga/effects';
import { fetchUsersFailure, fetchUsersSuccess } from '..';
import { TUser } from '../types';
import { PayloadAction } from '@reduxjs/toolkit';

async function fetchUsers(searchQuery: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?q=${searchQuery}`
  );
  const json = await res.json();

  return json;
}

export function* fetchUsersSaga(action: PayloadAction<string>): Generator {
  console.log('Action in saga:', action);

  try {
    const users = (yield call(fetchUsers, action.payload)) as TUser[];
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchUsersFailure(error.message));
    }
  }
}
