import { SettingsActionTypes } from './SettingsActionTypes';

const failure = (error) => ({
  type: SettingsActionTypes.FAILURE,
  payload: error,
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
  failure,
  loading,
  resetFailure,
  resetLoading,
};
