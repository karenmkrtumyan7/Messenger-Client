const selectUsers = (state) => state.currentUsers.map(((user) => {
  const { _id: id } = user;
  return {
    key: id,
    username: user.userName,
    id,
    email: user.email,
    contact: user.contact,
    'creation-date': new Date(user.createdAt).toLocaleDateString(),
  };
}));

const selectAllUsersCount = (state) => state.count;
const selectUsersLoading = (state) => state.loading;

export {
  selectUsers,
  selectAllUsersCount,
  selectUsersLoading,
};
