import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';

const initialState = {
  messages: [],
  members: [],
  notSeenMessages: [],
  isUserMessagesSeen: false,
};

export const messenger = (state = initialState, { type, payload }) => {
  switch (type) {
  case MessengerActionTypes.GET_CONVERSATION_MESSAGES_SUCCESS:
    return {
      ...state,
      messages: payload.messages,
    };
  case MessengerActionTypes.GET_CONVERSATION_MESSAGES_RESET:
    return {
      ...state,
      messages: [],
    };
  case MessengerActionTypes.GET_CONVERSATIONS_MEMBERS_SUCCESS:
    return {
      ...state,
      members: payload.members,
    };
  case MessengerActionTypes.GET_CONVERSATIONS_MEMBERS_RESET:
    return {
      ...state,
      members: [],
    };
  case MessengerActionTypes.CONVERSATION_NEW_MESSAGE:
    return {
      ...state,
      messages: [...state.messages, payload.data],
    };
  case MessengerActionTypes.GET_CONVERSATIONS_NOT_SEEN_MESSAGES_SUCCESS:
    return {
      ...state,
      notSeenMessages: payload.data,
    };
  case MessengerActionTypes.GET_CONVERSATIONS_NOT_SEEN_MESSAGES_RESET:
    return {
      ...state,
      notSeenMessages: [],
    };
  case MessengerActionTypes.PUT_CONVERSATION_MESSAGES_SEEN_SUCCESS: {
    return {
      ...state,
      isUserMessagesSeen: true,
    };
  }
  case MessengerActionTypes.PUT_CONVERSATION_MESSAGES_SEEN_RESET: {
    return {
      ...state,
      isUserMessagesSeen: false,
    };
  }
  default: return state;
  }
};
