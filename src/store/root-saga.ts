import { takeEvery } from 'redux-saga/effects';
import { fetchUsersStart } from './slices/users';
import { fetchUsersSaga } from './slices/users/sagas';

function* rootSaga() {
  yield takeEvery(fetchUsersStart.toString(), fetchUsersSaga);
}

export default rootSaga;
