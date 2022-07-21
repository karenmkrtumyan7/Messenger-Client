const selectRegistered = (state) => state.registered;
const selectAuthenticated = (state) => !!state.token;

const selectAuthData = (state) => state.authData;
const selectVerifyMessage = (state) => state.verifyMessage;

export {
  selectRegistered,
  selectAuthenticated,
  selectVerifyMessage,
  selectAuthData,
};
