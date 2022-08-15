const selectMembers = (state) => state.members;
const selectMessages = (state) => state.messages;
const selectNotSeenMessages = (state) => state.notSeenMessages;

export {
  selectMembers,
  selectMessages,
  selectNotSeenMessages,
};
