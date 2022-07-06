import { UserActionTypes } from './UserActionTypes';

const getUsersRequest = (page, limit) => ({
  type: UserActionTypes.GET_USERS_REQUEST,
  payload: { page, limit },
});

const getUserSuccess = (count, currentUsers) => ({
  type: UserActionTypes.GET_USERS_SUCCESS,
  payload: { count, currentUsers },
});

export {
  getUsersRequest,
  getUserSuccess,
};
