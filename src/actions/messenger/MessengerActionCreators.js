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

const sendMessageSuccess = (data) => ({
  type: MessengerActionTypes.POST_CONVERSATION_MESSAGE_SUCCESS,
  payload: { data },
});

const newMessage = (data) => ({
  type: MessengerActionTypes.POST_CONVERSATION_MESSAGE_SUCCESS,
  payload: { data },
});

export {
  getConversationsMembersRequest,
  getConversationMembersSuccess,
  getMessagesRequest,
  getMessagesSuccess,
  sendMessageRequest,
  sendMessageSuccess,
  newMessage,
};
