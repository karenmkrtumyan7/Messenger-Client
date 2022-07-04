import { AuthActionTypes } from './AuthActionTypes';

const signInSuccess = (data) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: { data },
});

const signInRequest = (data) => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  payload: { data },
});

const signInReset = () => ({
  type: AuthActionTypes.LOGIN_RESET,
});

const signUpSuccess = () => ({
  type: AuthActionTypes.REGISTER_SUCCESS,
});

const signUpRequest = (data) => ({
  type: AuthActionTypes.REGISTER_REQUEST,
  payload: { data },
});

const signUpReset = () => ({
  type: AuthActionTypes.REGISTER_RESET,
});

const verifySuccess = (message) => ({
  type: AuthActionTypes.VERIFY_SUCCESS,
  payload: { message },
});

const verifyRequest = (id) => ({
  type: AuthActionTypes.VERIFY_REQUEST,
  payload: { id },
});

const verifyFailure = (message) => ({
  type: AuthActionTypes.VERIFY_FAILURE,
  payload: { message },
});

export {
  signInSuccess,
  signInRequest,
  signUpSuccess,
  signUpRequest,
  signUpReset,
  verifySuccess,
  verifyRequest,
  verifyFailure,
  signInReset,
};
