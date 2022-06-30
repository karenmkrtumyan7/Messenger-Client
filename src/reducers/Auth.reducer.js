import { AuthActionTypes } from '../actions/auth/AuthActionTypes';

const initialState = {
  registered: false,
  token: '',
  userId: '',
  verifyMessage: '',
  loading: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
  case AuthActionTypes.LOGIN_SUCCESS:
    return {
      ...state,
      registered: false,
      loading: false,
      ...action.payload,
    };
  case AuthActionTypes.VERIFY_SUCCESS:
    return {
      ...state,
      registered: false,
      loading: false,
      verifyMessage: action.payload.message,
    };
  case AuthActionTypes.VERIFY_FAILURE:
    return {
      ...state,
      registered: false,
      loading: false,
      verifyMessage: action.payload.message,
    };
  case AuthActionTypes.SIGN_OUT:
    return {
      ...state,
      registered: false,
      verifyMessage: action.payload.message,
    };
  case AuthActionTypes.REGISTER_SUCCESS:
    return {
      ...state,
      registered: true,
      loading: false,
    };
  case AuthActionTypes.REGISTER_RESET:
    return {
      ...state,
      registered: false,
    };
  default: return state;
  }
};
