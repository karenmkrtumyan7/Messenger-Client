const selectMembers = (state) => state.members;
const selectMessages = (state) => state.messages;
const selectNotSeenMessages = (state) => state.notSeenMessages;
const selectIsUserMessagesSeen = (state) => state.isUserMessagesSeen;

export {
  selectMembers,
  selectMessages,
  selectNotSeenMessages,
  selectIsUserMessagesSeen,
};
