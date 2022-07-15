import { AuthActionTypes } from 'actions/auth/AuthActionTypes';
import localStorageService from 'services/localStorage.service';

const initialState = {
  authData: localStorageService.get('auth') || {},
  verifyMessage: '',
};

export const auth = (state = initialState, { type, payload }) => {
  switch (type) {
  case AuthActionTypes.SIGNIN_SUCCESS:
    return {
      ...state,
      authData: payload.data,
    };
  case AuthActionTypes.SIGNIN_RESET:
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
      verifyMessage: payload.errors.msg,
    };
  default: return state;
  }
};
