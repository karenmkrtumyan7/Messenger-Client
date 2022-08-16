const selectUsers = (state) => state.users;
const selectUsersCount = (state) => selectUsers(state).count;
const selectUsersData = (state) => selectUsers(state).data;

const selectUsersLoading = (state) => state.loading;
const selectUserChange = (state) => state.userChange;

const selectUser = (state) => state.user;
const selectUserResources = (state) => state.permissions;

export {
  selectUsersCount,
  selectUsersData,
  selectUsersLoading,
  selectUserChange,
  selectUser,
  selectUserResources,
};
