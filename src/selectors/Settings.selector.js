const selectErrorMessage = (state) => state.error.errorMessage;
const selectSuccessMessage = (state) => state.successMessage;
const selectLoading = (state) => state.loading;

export { selectErrorMessage, selectLoading, selectSuccessMessage };
