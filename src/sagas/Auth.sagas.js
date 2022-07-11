import {
  call, takeLatest, put,
} from '@redux-saga/core/effects';
import {
  signInSuccess, signUpSuccess, verifyFailure, verifySuccess,
} from '../actions/auth/AuthActionCreators';
import { failure, loading, resetLoading } from '../actions/settings/SettingsActionCreators';
import { AuthActionTypes } from '../actions/auth/AuthActionTypes';
import NetworkService from '../services/network.service';

const {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  VERIFY_REQUEST,
} = AuthActionTypes;

function* signInSaga({ payload }) {
  try {
    yield put(loading());
    const options = {
      data: payload.data,
    };
    const { data } = yield call(NetworkService.makeAPIPostRequest, 'auth/signin', options);

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
    const options = {
      data: payload.data,
    };

    yield call(NetworkService.makeAPIPostRequest, 'auth/signup', options);
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

    const { data: { msg } } = yield call(NetworkService.makeAPIPutRequest, `verify/${userId}`);
    yield put(verifySuccess(msg));
  } catch ({ response: { data: message } }) {
    const { msg } = message;
    yield put(verifyFailure(msg));
  } finally {
    yield put(resetLoading());
  }
}

export const authSagas = [
  takeLatest(LOGIN_REQUEST, signInSaga),
  takeLatest(REGISTER_REQUEST, signUpSaga),
  takeLatest(VERIFY_REQUEST, verifySaga),
];
