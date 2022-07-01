import { UserActionTypes } from './UserActionTypes';

const getUsersRequest = () => ({
  type: UserActionTypes.GET_USERS_REQUEST,
});

const getUserSuccess = (users) => ({
  type: UserActionTypes.GET_USERS_SUCCESS,
  payload: { users },
});

export {
  getUsersRequest,
  getUserSuccess,
};
