import { combineReducers } from 'redux';
import { auth } from './Auth.reducer';
import { settings } from './Settings.reducer';
import { user } from './User.reducer';

const reducers = combineReducers({ auth, settings, user });

export default reducers;
