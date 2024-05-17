import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
  createUserStart,
  deleteUserStart,
  editUserStart,
  fetchUsersStart,
} from './slices/users';
import {
  fetchUsersSaga,
  createUserSaga,
  deleteUserSaga,
  editUserSaga,
} from './slices/users/sagas';

function* rootSaga() {
  yield takeLatest(fetchUsersStart.toString(), fetchUsersSaga);
  yield takeEvery(createUserStart.toString(), createUserSaga);
  yield takeEvery(deleteUserStart.toString(), deleteUserSaga);
  yield takeEvery(editUserStart.toString(), editUserSaga);
}

export default rootSaga;
