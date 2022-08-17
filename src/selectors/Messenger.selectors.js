const selectMembers = (state) => state.members;
const selectMessages = (state) => state.messages;
const selectNotSeenMessages = (state) => state.notSeenMessages;
const selectIsUserMessagesSeen = (state) => state.isUserMessagesSeen;
const selectIsUserTyping = (state) => state.isUserTyping;

export {
  selectMembers,
  selectMessages,
  selectNotSeenMessages,
  selectIsUserMessagesSeen,
  selectIsUserTyping,
};
