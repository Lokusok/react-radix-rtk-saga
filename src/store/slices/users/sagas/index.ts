import { put, call } from 'redux-saga/effects';
import { fetchUsersFailure, fetchUsersSuccess } from '..';
import { TUser } from '../types';

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await res.json();

  return json;
}

export function* fetchUsersSaga(): Generator {
  try {
    const users = (yield call(fetchUsers)) as TUser[];
    console.log('in saga:', users);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchUsersFailure(error.message));
    }
  }
}
