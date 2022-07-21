const selectUsers = (state) => state.users;
const selectUsersCount = (state) => selectUsers(state).count;
const selectUsersData = (state) => selectUsers(state).data;

const selectUsersLoading = (state) => state.loading;
const selectUserChange = (state) => state.userChange;

export {
  selectUsersCount,
  selectUsersData,
  selectUsersLoading,
  selectUserChange,
};
