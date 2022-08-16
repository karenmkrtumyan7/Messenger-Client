import { UserActionTypes } from 'actions/user/UserActionTypes';

const getUsersRequest = (filterParams) => ({
  type: UserActionTypes.GET_USERS_REQUEST,
  payload: { filterParams },
});

const getUsersSuccess = (data) => ({
  type: UserActionTypes.GET_USERS_SUCCESS,
  payload: { data },
});

const editUserRequest = (id, userChanges) => ({
  type: UserActionTypes.EDIT_USER_REQUEST,
  payload: { id, userChanges },
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

const getUserRequest = (id) => ({
  type: UserActionTypes.GET_USER_REQUEST,
  payload: { id },
});

const getUserSuccess = (userData) => ({
  type: UserActionTypes.GET_USER_SUCCESS,
  payload: { userData },
});

const updatePermissionsRequest = (id, updatePermissionsData) => ({
  type: UserActionTypes.UPDATE_PERMISSIONS_REQUEST,
  payload: { id, updatePermissionsData },
});

const getPermissionsRequest = (id) => ({
  type: UserActionTypes.GET_PERMISSIONS_REQUEST,
  payload: { id },
});

const getPermissionsSuccess = (userPermissions) => ({
  type: UserActionTypes.GET_PERMISSIONS_SUCCESS,
  payload: { userPermissions },
});

export {
  getUsersRequest,
  getUsersSuccess,
  editUserRequest,
  editUserSuccess,
  editUserReset,
  deleteUserRequest,
  deleteUserSuccess,
  getUserRequest,
  getUserSuccess,
  updatePermissionsRequest,
  getPermissionsSuccess,
  getPermissionsRequest,
};
