import { UserActionTypes } from './UserActionTypes';

const getUsersRequest = (page, limit) => ({
  type: UserActionTypes.GET_USERS_REQUEST,
  payload: { page, limit },
});

const getUserSuccess = (data) => ({
  type: UserActionTypes.GET_USERS_SUCCESS,
  payload: { data },
});

const editUserRequest = (userChanges) => ({
  type: UserActionTypes.EDIT_USER_REQUEST,
  payload: { userChanges },
});

const editUserSuccess = () => ({
  type: UserActionTypes.EDIT_USER_SUCCESS,
});

const editUserReset = () => ({
  type: UserActionTypes.EDIT_USER_RESET,
});

const deleteUserRequest = (id) => ({
  type: UserActionTypes.DELETE_USER_REQUEST,
  payload: { id },
});

const deleteUserSuccess = () => ({
  type: UserActionTypes.DELETE_USER_SUCCESS,
});

const deleteUserReset = () => ({
  type: UserActionTypes.DELETE_USER_RESET,
});

export {
  getUsersRequest,
  getUserSuccess,
  editUserRequest,
  editUserSuccess,
  editUserReset,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserReset,
};
