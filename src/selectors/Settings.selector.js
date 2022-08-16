const selectErrorMessage = (state) => state.error.errorMessage;
const selectSuccessMessage = (state) => state.successMessage;
const selectLoading = (state) => state.loading;
const selectChangeStatus = (state) => state.changeStatus;

export {
  selectErrorMessage,
  selectLoading,
  selectSuccessMessage,
  selectChangeStatus,
};
