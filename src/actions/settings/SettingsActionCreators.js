import { SettingsActionTypes } from './SettingsActionTypes';

const success = (successMessage) => ({
  type: SettingsActionTypes.SUCCESS,
  payload: { successMessage },
});

const resetSuccess = () => ({
  type: SettingsActionTypes.RESET_SUCCESS,
});

const failure = (error) => ({
  type: SettingsActionTypes.FAILURE,
  payload: { error },
});

const resetFailure = () => ({
  type: SettingsActionTypes.RESET_FAILURE,
});

const loading = () => ({
  type: SettingsActionTypes.LOADING,
});
const resetLoading = () => ({
  type: SettingsActionTypes.RESET_LOADING,
});

export {
  success,
  failure,
  loading,
  resetFailure,
  resetLoading,
  resetSuccess,
};
