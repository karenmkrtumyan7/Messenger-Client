import { call, put, takeLatest } from '@redux-saga/core/effects';
import { userApi } from '../utils/axios.instance';
import { loading, resetLoading } from '../actions/settings/SettingsActionCreators';
import { getUserSuccess } from '../actions/user/UserActionCreator';
import { UserActionTypes } from '../actions/user/UserActionTypes';

const { GET_USERS_REQUEST } = UserActionTypes;

function* getUsers({ payload = {} }) {
  const { page = 1, limit = 4 } = payload;
  try {
    yield put(loading());

    const { data: { count, results } } = yield call(userApi.get, `/?page=${page}&limit=${limit}`);
    yield put(getUserSuccess(count, results));
  } finally {
    yield put(resetLoading());
  }
}

// function* editUser({ payload }) {
//   const edit = payload.editedUser;
//
//   try {
//     yield put(loading());
//
//     const { data: msg } = yield call(userApi.put, `/`, { edit });
//
//   } catch(e) {
//
//   } finally {
//     yield put(resetLoading());
//   }
// }

export const userSagas = [
  takeLatest(GET_USERS_REQUEST, getUsers),
];
