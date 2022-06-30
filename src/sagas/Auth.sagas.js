import {
  call, takeLatest, put, takeEvery,
} from '@redux-saga/core/effects';
import {
  signInSuccess, signUpSuccess, verifyFailure, verifySuccess,
} from '../actions/auth/AuthActionCreators';
import { failure, load  ing, resetLoading } from '../actions/settings/SettingsActionCreators';
import { AuthActionTypes } from '../actions/auth/AuthActionTypes';
import { authApi } from '../services/auth.service';

const {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  VERIFY_REQUEST,
} = AuthActionTypes;

function* signInSaga({ payload }) {
  try {
    yield put(loading());
    const { data } = yield call(authApi.post, 'signin', payload);

    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);

    yield put(signInSuccess(data));
  } catch ({ response: { data: messages } }) {
    yield put(failure(messages));
  } finally {
    yield put(resetLoading());
  }
}

function* signUpSaga({ payload }) {
  try {
    yield put(loading());

    yield call(authApi.post, 'signup', payload);
    yield put(signUpSuccess());
  } catch ({ response: { data: messages } }) {
    yield put(failure(messages));
  } finally {
    yield put(resetLoading());
  }
}

function* verifySaga({ payload: { id } }) {
  const userId = localStorage.getItem('userId') || id;
  try {
    yield put(loading());

    const { data: { msg } } = yield call(authApi.put, `verify/${userId}`);
    yield put(verifySuccess(msg));
  } catch ({ response: { data: message } }) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    const { msg } = message;
    yield put(verifyFailure(msg));
  } finally {
    yield put(resetLoading());
  }
}

export const authSagas = [
  takeLatest(LOGIN_REQUEST, signInSaga),
  takeLatest(REGISTER_REQUEST, signUpSaga),
  takeEvery(VERIFY_REQUEST, verifySaga),
];
