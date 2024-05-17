import { put, call } from 'redux-saga/effects';
import {
  createUserFailure,
  createUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  editUserFailure,
  editUserSuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
} from '..';
import { TUser } from '../types';
import { PayloadAction } from '@reduxjs/toolkit';
import { createUser, deleteUser, editUser, fetchUsers } from '../api';

/**
 * Запросить всех пользователей через поисковую строку
 */
export function* fetchUsersSaga(action: PayloadAction<string>): Generator {
  try {
    const users = (yield call(fetchUsers, action.payload)) as TUser[];
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchUsersFailure(error.message));
    }
  }
}

/**
 * Создать пользователя
 */
export function* createUserSaga(action: PayloadAction<TUser>): Generator {
  try {
    const createdUser = (yield call(createUser, action.payload)) as TUser;
    yield put(createUserSuccess(createdUser));
  } catch (error) {
    if (error instanceof Error) {
      yield put(createUserFailure(error.message));
    }
  }
}

/**
 * Удалить пользователя
 */
export function* deleteUserSaga(action: PayloadAction<string>): Generator {
  try {
    yield call(deleteUser, action.payload);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    if (error instanceof Error) {
      yield put(deleteUserFailure(error.message));
    }
  }
}

/**
 * Изменить пользователя
 */
export function* editUserSaga(action: PayloadAction<TUser>): Generator {
  try {
    const response = (yield call(editUser, action.payload)) as TUser;
    yield put(editUserSuccess(response));
  } catch (error) {
    if (error instanceof Error) {
      yield put(editUserFailure(error.message));
    }
  }
}
