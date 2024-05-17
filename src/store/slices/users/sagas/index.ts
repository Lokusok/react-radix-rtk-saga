import { put, call } from 'redux-saga/effects';
import {
  createUserFailure,
  createUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
} from '..';
import { TUser } from '../types';
import { PayloadAction } from '@reduxjs/toolkit';
import { createUser, deleteUser, fetchUsers } from '../api';

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
 * Отправить запрос на создание пользователя
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
 * Отправить запрос на удаление пользователя
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
