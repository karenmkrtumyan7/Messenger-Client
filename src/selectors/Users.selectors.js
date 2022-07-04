const getUsers = (state) => state.users.map(((user) => {
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
export {
  getUsers,
};
