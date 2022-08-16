import { UserActionTypes } from 'actions/user/UserActionTypes';

const initialState = {
  users: {
    count: 0,
    data: [],
  },
  user: {},
  permissions: {},
  loading: false,
  userChange: false,
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
  case UserActionTypes.GET_USERS_SUCCESS:
    return {
      ...state,
      users: payload.data,
      loading: false,
    };
  case UserActionTypes.GET_USERS_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case UserActionTypes.EDIT_USER_SUCCESS:
    return {
      ...state,
      userChange: true,
    };
  case UserActionTypes.EDIT_USER_RESET:
    return {
      ...state,
      userChange: false,
    };
  case UserActionTypes.DELETE_USER_SUCCESS:
    return {
      ...state,
      userChange: true,
    };
  case UserActionTypes.DELETE_USER_RESET:
    return {
      ...state,
      userChange: false,
    };
  case UserActionTypes.GET_USER_SUCCESS:
    return {
      ...state,
      user: payload.userData,
    };
  case UserActionTypes.GET_PERMISSIONS_SUCCESS:
    return {
      ...state,
      permissions: payload.userPermissions,
    };
  default: return state;
  }
};
