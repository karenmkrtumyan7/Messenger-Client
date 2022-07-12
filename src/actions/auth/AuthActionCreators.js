import { AuthActionTypes } from './AuthActionTypes';

const signInSuccess = (data) => ({
  type: AuthActionTypes.SIGNIN_SUCCESS,
  payload: { data },
});

const signInRequest = (data) => ({
  type: AuthActionTypes.SIGNIN_REQUEST,
  payload: { data },
});

const signInReset = () => ({
  type: AuthActionTypes.SIGNIN_RESET,
});

const signUpSuccess = () => ({
  type: AuthActionTypes.SIGNUP_SUCCESS,
});

const signUpRequest = (data) => ({
  type: AuthActionTypes.SIGNUP_REQUEST,
  payload: { data },
});

const signUpReset = () => ({
  type: AuthActionTypes.SIGNUP_RESET,
});

const verifySuccess = (message) => ({
  type: AuthActionTypes.VERIFY_SUCCESS,
  payload: { message },
});

const verifyRequest = (id) => ({
  type: AuthActionTypes.VERIFY_REQUEST,
  payload: { id },
});

const verifyFailure = (error) => ({
  type: AuthActionTypes.VERIFY_FAILURE,
  payload: error,
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
