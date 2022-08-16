import { AuthActionTypes } from 'actions/auth/AuthActionTypes';

const signInSuccess = (data) => ({
  type: AuthActionTypes.SIGNIN_SUCCESS,
  payload: { data },
});

const signInRequest = (data) => ({
  type: AuthActionTypes.SIGNIN_REQUEST,
  payload: { data },
});

const signInReset = () => ({ // FOR SIGN-OUT BUTTON
  type: AuthActionTypes.SIGNIN_RESET,
});

const signUpRequest = (data) => ({
  type: AuthActionTypes.SIGNUP_REQUEST,
  payload: { data },
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

const getUserDetailsRequest = () => ({
  type: AuthActionTypes.AUTH_USER_REQUEST,
});

const getUserDetailsSuccess = (data) => ({
  type: AuthActionTypes.AUTH_USER_SUCCESS,
  payload: { data },
});

export {
  signInSuccess,
  signInRequest,
  signUpRequest,
  verifySuccess,
  verifyRequest,
  verifyFailure,
  signInReset,
  getUserDetailsSuccess,
  getUserDetailsRequest,
};
