import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';

const getConversationsMembersRequest = (id) => ({
  type: MessengerActionTypes.GET_CONVERSATIONS_MEMBERS_REQUEST,
  payload: { id },
});

const getConversationMembersSuccess = (members) => ({
  type: MessengerActionTypes.GET_CONVERSATIONS_MEMBERS_SUCCESS,
  payload: { members },
});

const getConversationMembersReset = () => ({
  type: MessengerActionTypes.GET_CONVERSATIONS_MEMBERS_RESET,
});

const getConversationMessagesRequest = (conversationId) => ({
  type: MessengerActionTypes.GET_CONVERSATION_MESSAGES_REQUEST,
  payload: { conversationId },
});

const getConversationMessagesSuccess = (messages) => ({
  type: MessengerActionTypes.GET_CONVERSATION_MESSAGES_SUCCESS,
  payload: { messages },
});

const getConversationMessagesReset = () => ({
  type: MessengerActionTypes.GET_CONVERSATION_MESSAGES_RESET,
});

const sendMessageRequest = (data) => ({
  type: MessengerActionTypes.POST_CONVERSATION_MESSAGE_REQUEST,
  payload: { data },
});

const newMessage = (data) => ({
  type: MessengerActionTypes.CONVERSATION_NEW_MESSAGE,
  payload: { data },
});

const getNotSeenMessagesRequest = (data) => ({
  type: MessengerActionTypes.GET_CONVERSATIONS_NOT_SEEN_MESSAGES_REQUEST,
  payload: { data },
});

const getNotSeenMessagesSuccess = (data) => ({
  type: MessengerActionTypes.GET_CONVERSATIONS_NOT_SEEN_MESSAGES_SUCCESS,
  payload: { data },
});

const getNotSeenMessagesReset = () => ({
  type: MessengerActionTypes.GET_CONVERSATIONS_NOT_SEEN_MESSAGES_RESET,
});

const userMessagesSeenRequest = (messageIds) => ({
  type: MessengerActionTypes.PUT_CONVERSATION_MESSAGES_SEEN_REQUEST,
  payload: { data: messageIds },
});

const userMessagesSeenSuccess = () => ({
  type: MessengerActionTypes.PUT_CONVERSATION_MESSAGES_SEEN_SUCCESS,
});

const userMessagesSeenReset = () => ({
  type: MessengerActionTypes.PUT_CONVERSATION_MESSAGES_SEEN_RESET,
});

export {
  getConversationsMembersRequest,
  getConversationMembersSuccess,
  getConversationMembersReset,
  getConversationMessagesRequest,
  getConversationMessagesSuccess,
  getConversationMessagesReset,
  sendMessageRequest,
  newMessage,
  getNotSeenMessagesSuccess,
  getNotSeenMessagesRequest,
  getNotSeenMessagesReset,
  userMessagesSeenRequest,
  userMessagesSeenSuccess,
  userMessagesSeenReset,
};
