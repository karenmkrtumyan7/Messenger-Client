import { fork, all } from 'redux-saga/effects';
import { authSagas } from './Auth.sagas';
import { userSagas } from './User.sagas';

function* auth() {
  yield all(authSagas);
}

function* user() {
  yield all(userSagas);
}

export function* rootSaga() {
  yield all([
    fork(auth),
    fork(user),
  ]);
}
