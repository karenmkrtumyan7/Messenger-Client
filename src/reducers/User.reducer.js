import { UserActionTypes } from '../actions/user/UserActionTypes';

const initialState = {
  count: 0,
  currentUsers: [],
  loading: false,
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
  case UserActionTypes.GET_USERS_SUCCESS:
    return {
      ...state,
      count: payload.count,
      currentUsers: payload.currentUsers,
      loading: false,
    };
  case UserActionTypes.GET_USERS_REQUEST:
    return {
      ...state,
      loading: true,
    };
  default: return state;
  }
};
