import {
  all,
  call, put, takeEvery, takeLatest,
} from '@redux-saga/core/effects';
import NetworkService from '../services/network.service';
import { failure, loading, resetLoading } from '../actions/settings/SettingsActionCreators';
import { deleteUserSuccess, editUserSuccess, getUserSuccess } from '../actions/user/UserActionCreator';
import { UserActionTypes } from '../actions/user/UserActionTypes';
import { AppConstants } from '../constants/app.constants';
import { getError } from '../utils';

const { GET_USERS_REQUEST, EDIT_USER_REQUEST, DELETE_USER_REQUEST } = UserActionTypes;
const { Users } = AppConstants.api;

function* getUsers({ payload = {} }) {
  const { page = 1, limit = 4 } = payload;
  try {
    yield put(loading());
    const options = {
      params: {
        page, limit,
      },
    };

    const { data } = yield call(NetworkService.makeAPIGetRequest, Users, options);
    yield put(getUserSuccess(data));
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  } finally {
    yield put(resetLoading());
  }
}

function* editUser({ payload }) {
  const { userChanges: edit } = payload;
  const { _id: id } = edit;

  try {
    yield put(loading());
    const options = {
      data: edit,
    };

    yield call(NetworkService.makeAPIPutRequest, [Users, id], options);
    yield put(editUserSuccess());
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  } finally {
    yield put(resetLoading());
  }
}

function* deleteUser({ payload }) {
  const { id } = payload;
  try {
    yield put(loading());

    yield call(NetworkService.makeAPIDeleteRequest, [Users, id]);
    yield put(deleteUserSuccess());
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
  ]);
}
