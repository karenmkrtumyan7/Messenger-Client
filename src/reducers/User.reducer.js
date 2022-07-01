import { UserActionTypes } from '../actions/user/UserActionTypes';

const initialState = {
  users: [],
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
  case UserActionTypes.GET_USERS_SUCCESS:
    return {
      ...state,
      users: payload.users,
    };
  default: return state;
  }
};
