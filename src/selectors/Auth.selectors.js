import { createSelector } from 'reselect';

const selectRegistered = (state) => state.registered;
const selectAuthenticated = (state) => !!state.token;

const selectAuthData = (state) => state.authData;
const selectVerifyMessage = (state) => state.verifyMessage;

const selectAuthUser = (state) => state.user;
const selectAuthUserId = (state) => selectAuthUser(state)._id;

const selectAuthUserRoleObject = (state) => createSelector(
  () => selectAuthUser(state).role,
  (roleObj) => (roleObj || {}),
)();

const selectAuthUserRole = (state) => selectAuthUserRoleObject(state).value || '';

const selectAuthUserResources = (state) => createSelector(
  () => selectAuthUserRoleObject(state).permissions,
  (permissions) => (permissions || {}),
)();

export {
  selectRegistered,
  selectAuthenticated,
  selectVerifyMessage,
  selectAuthData,
  selectAuthUserId,
  selectAuthUserResources,
  selectAuthUser,
  selectAuthUserRole,
};
