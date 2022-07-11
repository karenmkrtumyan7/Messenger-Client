import { all } from 'redux-saga/effects';
import { authSagas } from './Auth.sagas';
import { userSagas } from './User.sagas';

export function* rootSaga() {
  yield all([
    authSagas(),
    userSagas(),
  ]);
}
