import { UserActionTypes } from '../actions/user/UserActionTypes';

const initialState = {
  users: {
    count: 0,
    data: [],
  },
  loading: false,
  userChange: false,
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
  case UserActionTypes.GET_USERS_SUCCESS:
    return {
      ...state,
      users: payload.data,
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
  default: return state;
  }
};
