import {
  all, call, put, takeEvery, takeLatest,
} from '@redux-saga/core/effects';
import { AppConstants } from 'constants/app.constants';
import NetworkService from 'services/network.service';
import { failure, loading, resetLoading } from 'actions/settings/SettingsActionCreators';
import { deleteUserSuccess, editUserSuccess, getUserSuccess } from 'actions/user/UserActionCreator';
import { UserActionTypes } from 'actions/user/UserActionTypes';
import { getError } from 'utils';
import { getUserDetailsSuccess } from 'actions/auth/AuthActionCreators';
import { AuthActionTypes } from 'actions/auth/AuthActionTypes';

const { GET_USERS_REQUEST, EDIT_USER_REQUEST, DELETE_USER_REQUEST } = UserActionTypes;
const { AUTH_USER_REQUEST } = AuthActionTypes;
const { Users } = AppConstants.api;

function* getUsers({ payload }) {
  const { filterParams } = payload;
  try {
    const options = {
      params: {
        ...filterParams,
      },
    };

    const { data } = yield call(NetworkService.makeAPIGetRequest, Users, options);
    yield put(getUserSuccess(data));
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  }
}

function* editUser({ payload }) {
  const { userChanges: edit, id } = payload;
  try {
    const options = {
      data: edit,
    };

    yield call(NetworkService.makeAPIPutRequest, [Users, id], options);
    yield put(editUserSuccess());
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  }
}

function* deleteUser({ payload }) {
  const { id } = payload;
  try {
    yield call(NetworkService.makeAPIDeleteRequest, [Users, id]);
    yield put(deleteUserSuccess());
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  }
}

function* getUserDetails() {
  try {
    yield put(loading());
    const { data } = yield call(NetworkService.makeAPIGetRequest, [Users, 'details']);
    yield put(getUserDetailsSuccess(data));
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  } finally {
    yield put(resetLoading());
  }
}

export function* userSagas() {
  yield all([
    takeEvery(GET_USERS_REQUEST, getUsers),
    takeLatest(EDIT_USER_REQUEST, editUser),
    takeLatest(DELETE_USER_REQUEST, deleteUser),
    takeEvery(AUTH_USER_REQUEST, getUserDetails),
  ]);
}
