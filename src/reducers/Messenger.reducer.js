import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';

const initialState = {
  messages: [],
  conversations: [],
};

export const messenger = (state = initialState, { type, payload }) => {
  switch (type) {
  case MessengerActionTypes.GET_MESSAGES_SUCCESS:
    return {
      ...state,
      messages: payload.messages,
    };
  case MessengerActionTypes.GET_CONVERSATIONS_SUCCESS:
    return {
      ...state,
      messages: payload.data,
    };
  default: return state;
  }
};
