import {
  call, put, takeEvery, takeLatest,
} from '@redux-saga/core/effects';
import { userApi } from '../utils/axios.instance';
import { failure, loading, resetLoading } from '../actions/settings/SettingsActionCreators';
import { deleteUserSuccess, editUserSuccess, getUserSuccess } from '../actions/user/UserActionCreator';
import { UserActionTypes } from '../actions/user/UserActionTypes';

const { GET_USERS_REQUEST, EDIT_USER_REQUEST, DELETE_USER_REQUEST } = UserActionTypes;

function* getUsers({ payload = {} }) {
  const { page = 1, limit = 4 } = payload;
  try {
    yield put(loading());

    const { data } = yield call(userApi.get, `/?page=${page}&limit=${limit}`);
    yield put(getUserSuccess(data));
  } finally {
    yield put(resetLoading());
  }
}

function* editUser({ payload }) {
  const { userChanges: edit } = payload;
  try {
    yield put(loading());

    yield call(userApi.put, '/', { edit });
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

    yield call(userApi.delete, `/${id}`);
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
