import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';

const getConversationCandidatesRequest = (id) => ({
  type: MessengerActionTypes.GET_CONVERSATIONS_REQUEST,
  payload: { id },
});

const getConversationCandidatesSuccess = (conversationCandidates) => ({
  type: MessengerActionTypes.GET_CONVERSATIONS_SUCCESS,
  payload: { conversationCandidates },
});

const getMessagesRequest = (from, to) => ({
  type: MessengerActionTypes.GET_MESSAGES_REQUEST,
  payload: { from, to },
});

const getMessagesSuccess = (messages) => ({
  type: MessengerActionTypes.GET_MESSAGES_SUCCESS,
  payload: { messages },
});

const sendMessageRequest = (data) => ({
  type: MessengerActionTypes.POST_MESSAGE_REQUEST,
  payload: { data },
});

const sendMessageSuccess = (data) => ({
  type: MessengerActionTypes.POST_MESSAGE_SUCCESS,
  payload: { data },
});

export {
  getConversationCandidatesRequest,
  getConversationCandidatesSuccess,
  getMessagesRequest,
  getMessagesSuccess,
  sendMessageRequest,
  sendMessageSuccess,
};
