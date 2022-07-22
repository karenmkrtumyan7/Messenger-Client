import { createSelector } from 'reselect';

const selectRegistered = (state) => state.registered;
const selectAuthenticated = (state) => !!state.token;

const selectAuthData = (state) => state.authData;
const selectVerifyMessage = (state) => state.verifyMessage;

const selectAuthUser = (state) => state.user;
const selectUserId = (state) => selectAuthUser(state)._id;

const selectUserRole = (state) => createSelector(
  () => selectAuthUser(state).role,
  (roleObj) => (roleObj || {}),
)();

const selectRole = (state) => selectUserRole(state).value;
const selectIsAdmin = (state) => selectUserRole(state).isAdmin;

const selectPermissions = (state) => createSelector(
  () => selectUserRole(state).permissions,
  (permissions) => (permissions || {}),
)();

const selectUsersPermissions = (state) => createSelector(
  () => selectPermissions(state).users,
  (users) => (users || {}),
)();

export {
  selectRegistered,
  selectAuthenticated,
  selectVerifyMessage,
  selectAuthData,
  selectUserId,
  selectIsAdmin,
  selectPermissions,
  selectAuthUser,
  selectRole,
  selectUsersPermissions,
};
