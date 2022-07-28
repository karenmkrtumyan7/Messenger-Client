import { SettingsActionTypes } from 'actions/settings/SettingsActionTypes';

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

const changeStatus = () => ({
  type: SettingsActionTypes.CHANGE_STATUS,
});

const resetChangeStatus = () => ({
  type: SettingsActionTypes.RESET_CHANGE_STATUS,
});

export {
  success,
  failure,
  loading,
  resetFailure,
  resetLoading,
  resetSuccess,
  changeStatus,
  resetChangeStatus,
};
