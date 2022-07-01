import { SettingsActionTypes } from '../actions/settings/SettingsActionTypes';

const initialState = {
  messages: [],
  loading: false,
};

export function settings(state = initialState, { type, payload }) {
  switch (type) {
  case SettingsActionTypes.FAILURE:
    return {
      ...state,
      messages: Object.values(payload),
    };
  case SettingsActionTypes.LOADING:
    return {
      ...state,
      loading: true,
    };
  case SettingsActionTypes.RESET_FAILURE: {
    return {
      ...state,
      messages: [],
    };
  }
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
