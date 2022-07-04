import { call, put, takeLatest } from '@redux-saga/core/effects';
import { userApi } from '../utils/axios.instance';
import { loading, resetLoading } from '../actions/settings/SettingsActionCreators';
import { getUserSuccess } from '../actions/user/UserActionCreator';
import { UserActionTypes } from '../actions/user/UserActionTypes';

const { GET_USERS_REQUEST } = UserActionTypes;

function* getUsers() {
  try {
    yield put(loading());

    const { data } = yield call(userApi.get, '/');
    yield put(getUserSuccess(data));
  } finally {
    yield put(resetLoading());
  }
}

export const userSagas = [
  takeLatest(GET_USERS_REQUEST, getUsers),
];
