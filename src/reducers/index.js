import { combineReducers } from 'redux';
import { auth } from 'reducers/Auth.reducer';
import { settings } from 'reducers/Settings.reducer';
import { user } from 'reducers/User.reducer';
import { messenger } from 'reducers/Messenger.reducer';

const reducers = combineReducers({
  auth,
  settings,
  user,
  messenger,
});

export default reducers;
