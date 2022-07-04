import { AuthActionTypes } from '../actions/auth/AuthActionTypes';

const initialState = {
  registered: false,
  verifyMessage: '',
  authData: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {},
};

export const auth = (state = initialState, { type, payload }) => {
  switch (type) {
  case AuthActionTypes.LOGIN_SUCCESS:
    return {
      ...state,
      authData: payload.data,
    };
  case AuthActionTypes.LOGIN_RESET:
    return {
      ...state,
      authData: {},
    };
  case AuthActionTypes.VERIFY_SUCCESS:
    return {
      ...state,
      verifyMessage: payload.message,
    };
  case AuthActionTypes.VERIFY_FAILURE:
    return {
      ...state,
      verifyMessage: payload.message,
    };
  case AuthActionTypes.REGISTER_SUCCESS:
    return {
      ...state,
      registered: true,
    };
  case AuthActionTypes.REGISTER_RESET:
    return {
      ...state,
      registered: false,
    };
  default: return state;
  }
};
