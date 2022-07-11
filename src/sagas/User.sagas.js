import {
  call, put, takeEvery, takeLatest,
} from '@redux-saga/core/effects';
import NetworkService from '../services/network.service';
import { failure, loading, resetLoading } from '../actions/settings/SettingsActionCreators';
import { deleteUserSuccess, editUserSuccess, getUserSuccess } from '../actions/user/UserActionCreator';
import { UserActionTypes } from '../actions/user/UserActionTypes';

const { GET_USERS_REQUEST, EDIT_USER_REQUEST, DELETE_USER_REQUEST } = UserActionTypes;

function* getUsers({ payload = {} }) {
  const { page = 1, limit = 4 } = payload;
  try {
    yield put(loading());
    const options = {
      params: {
        page, limit,
      },
    };

    const { data } = yield call(NetworkService.makeAPIGetRequest, '', options);
    yield put(getUserSuccess(data));
  } finally {
    yield put(resetLoading());
  }
}

function* editUser({ payload }) {
  const { userChanges: edit } = payload;
  try {
    yield put(loading());

    yield call(NetworkService.makeAPIPutRequest, '/', { edit });
    yield put(editUserSuccess());
  } catch (e) {
    // console.log(e);
    // yield put(failure(message));
  } finally {
    yield put(resetLoading());
  }
}

function* deleteUser({ payload }) {
  const { id } = payload;
  try {
    yield put(loading());

    yield call(NetworkService.makeAPIDeleteRequest, `/${id}`);
    yield put(deleteUserSuccess());
  } catch ({ response: { data: message } }) {
    yield put(failure(message));
  } finally {
    yield put(resetLoading());
  }
}

export const userSagas = [
  takeEvery(GET_USERS_REQUEST, getUsers),
  takeLatest(EDIT_USER_REQUEST, editUser),
  takeLatest(DELETE_USER_REQUEST, deleteUser),
];
