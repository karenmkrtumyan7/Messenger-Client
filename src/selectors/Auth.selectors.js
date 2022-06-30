const selectRegistered = (state) => state.registered;
const selectAuthenticated = (state) => !!state.token;
const selectVerifyMessage = (state) => state.verifyMessage;
export {
  selectRegistered,
  selectAuthenticated,
  selectVerifyMessage,
};
