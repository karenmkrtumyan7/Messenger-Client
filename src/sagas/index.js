import { all } from 'redux-saga/effects';
import { authSagas } from 'sagas/Auth.sagas';
import { userSagas } from 'sagas/User.sagas';

export function* rootSaga() {
  yield all([
    authSagas(),
    userSagas(),
  ]);
}
