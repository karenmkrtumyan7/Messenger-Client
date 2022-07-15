import { SettingsActionTypes } from 'actions/settings/SettingsActionTypes';

const initialState = {
  error: { status: null, errorMessage: '', errorCode: '' },
  successMessage: '',
  loading: false,
};

export function settings(state = initialState, { type, payload }) {
  switch (type) {
  case SettingsActionTypes.FAILURE:
    return {
      ...state,
      error: payload.error,
    };
  case SettingsActionTypes.RESET_FAILURE: {
    return {
      ...state,
      error: { status: null, errorMessage: '', errorCode: '' },
    };
  }
  case SettingsActionTypes.SUCCESS:
    return {
      ...state,
      successMessage: payload.successMessage,
    };
  case SettingsActionTypes.RESET_SUCCESS:
    return {
      ...state,
      successMessage: '',
    };
  case SettingsActionTypes.LOADING:
    return {
      ...state,
      loading: true,
    };
  case SettingsActionTypes.RESET_LOADING: {
    return {
      ...state,
      loading: false,
    };
  }
  default:
    return state;
  }
}
