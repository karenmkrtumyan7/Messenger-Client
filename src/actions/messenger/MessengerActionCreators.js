import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';

const getConversationsMembersRequest = (id) => ({
  type: MessengerActionTypes.GET_CONVERSATIONS_MEMBERS_REQUEST,
  payload: { id },
});

const getConversationMembersSuccess = (members) => ({
  type: MessengerActionTypes.GET_CONVERSATIONS_MEMBERS_SUCCESS,
  payload: { members },
});

const getMessagesRequest = (conversationId) => ({
  type: MessengerActionTypes.GET_CONVERSATION_MESSAGES_REQUEST,
  payload: { conversationId },
});

const getMessagesSuccess = (messages) => ({
  type: MessengerActionTypes.GET_CONVERSATION_MESSAGES_SUCCESS,
  payload: { messages },
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

const messagesSeenRequest = (messageIds) => ({
  type: MessengerActionTypes.PUT_CONVERSATION_MESSAGES_SEEN_REQUEST,
  payload: { data: messageIds },
});

export {
  getConversationsMembersRequest,
  getConversationMembersSuccess,
  getMessagesRequest,
  getMessagesSuccess,
  sendMessageRequest,
  newMessage,
  getNotSeenMessagesSuccess,
  getNotSeenMessagesRequest,
  messagesSeenRequest,
};
