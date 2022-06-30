import { fork, all } from 'redux-saga/effects';
import { authSagas } from './Auth.sagas';

function* auth() {
  // console.log('auth');
  yield all(authSagas);
}

function* user() {
  // console.log('user');
}

export function* rootSaga() {
  yield all([
    fork(auth),
    fork(user),
  ]);
}
