import {
  call, takeLatest, put, all,
} from '@redux-saga/core/effects';
import {
  signInSuccess, verifyFailure, verifySuccess,
} from 'actions/auth/AuthActionCreators';
import {
  failure, loading, resetLoading, success,
} from 'actions/settings/SettingsActionCreators';
import { AuthActionTypes } from 'actions/auth/AuthActionTypes';
import NetworkService from 'services/network.service';
import { AppConstants } from 'constants/app.constants';
import { getError } from 'utils';
import localStorageService from 'services/localStorage.service';

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
    localStorageService.set('auth', data);

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

    const { data } = yield call(NetworkService.makeAPIPostRequest, [Auth, SignUp], options);
    yield put(success(data.msg));
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

    const { data: { msg } } = yield call(NetworkService.makeAPIPutRequest, [Auth, Verify, userId]);
    yield put(verifySuccess(msg));
  } catch (err) {
    const error = getError(err);
    yield put(verifyFailure(error));
  } finally {
    yield put(resetLoading());
  }
}

export function* authSagas() {
  yield all([
    takeLatest(AuthActionTypes.SIGNIN_REQUEST, signIn),
    takeLatest(AuthActionTypes.SIGNUP_REQUEST, signUp),
    takeLatest(AuthActionTypes.VERIFY_REQUEST, verify),
  ]);
}
