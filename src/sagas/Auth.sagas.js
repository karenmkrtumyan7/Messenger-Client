import {
  call, takeLatest, put, all,
} from '@redux-saga/core/effects';
import {
  signInSuccess, signUpSuccess, verifyFailure, verifySuccess,
} from '../actions/auth/AuthActionCreators';
import { failure, loading, resetLoading } from '../actions/settings/SettingsActionCreators';
import { AuthActionTypes } from '../actions/auth/AuthActionTypes';
import NetworkService from '../services/network.service';
import { AppConstants } from '../constants/app.constants';
import { getError } from '../utils';

const {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  VERIFY_REQUEST,
} = AuthActionTypes;
const {
  Auth, SignIn, SignUp, Verify,
} = AppConstants.api;

function* signIn({ payload }) {
  try {
    yield put(loading());
    const options = {
      data: payload.data,
    };
    const { data } = yield call(NetworkService.makeAPIPostRequest, [Auth, SignIn], options);

    yield put(signInSuccess(data));
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  } finally {
    yield put(resetLoading());
  }
}

function* signUp({ payload }) {
  try {
    yield put(loading());
    const options = {
      data: payload.data,
    };

    yield call(NetworkService.makeAPIPostRequest, [Auth, SignUp], options);
    yield put(signUpSuccess());
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  } finally {
    yield put(resetLoading());
  }
}

function* verify({ payload: { id } }) {
  const userId = id;
  try {
    yield put(loading());

    const { data: { msg } } = yield call(NetworkService.makeAPIPutRequest, [Verify, userId]);
    yield put(verifySuccess(msg));
  } catch (err) {
    const error = getError(err);
    yield put(verifyFailure(error.message.msg));
  } finally {
    yield put(resetLoading());
  }
}

export function* authSagas() {
  yield all([
    takeLatest(LOGIN_REQUEST, signIn),
    takeLatest(REGISTER_REQUEST, signUp),
    takeLatest(VERIFY_REQUEST, verify),
  ]);
}
