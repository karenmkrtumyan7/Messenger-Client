import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';

const initialState = {
  messages: [],
  members: [],
  notSeenMessages: [],
};

export const messenger = (state = initialState, { type, payload }) => {
  switch (type) {
  case MessengerActionTypes.GET_CONVERSATION_MESSAGES_SUCCESS:
    return {
      ...state,
      messages: payload.messages,
    };
  case MessengerActionTypes.GET_CONVERSATIONS_MEMBERS_SUCCESS:
    return {
      ...state,
      members: payload.members,
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
  default: return state;
  }
};
