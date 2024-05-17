import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
  createUserStart,
  deleteUserStart,
  fetchUsersStart,
} from './slices/users';
import {
  fetchUsersSaga,
  createUserSaga,
  deleteUserSaga,
} from './slices/users/sagas';

function* rootSaga() {
  yield takeLatest(fetchUsersStart.toString(), fetchUsersSaga);
  yield takeEvery(createUserStart.toString(), createUserSaga);
  yield takeEvery(deleteUserStart.toString(), deleteUserSaga);
}

export default rootSaga;
