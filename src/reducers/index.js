import { combineReducers } from 'redux';
import { auth } from './Auth.reducer';
import { settings } from './Settings.reducer';

const reducers = combineReducers({ auth, settings });

export default reducers;
