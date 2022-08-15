import {
  all, call, put, takeEvery, takeLatest,
} from '@redux-saga/core/effects';
import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';
import { getConversationMembersSuccess, getMessagesSuccess, getNotSeenMessagesSuccess } from 'actions/messenger/MessengerActionCreators';
import { getError } from 'utils';
import { failure } from 'actions/settings/SettingsActionCreators';
import socket from 'services/socket';
import NetworkService from 'services/network.service';
import { resource } from 'constants/accessControl';

const {
  messenger, members, messages, notSeenMessages, messagesSeen,
} = resource;

function* getConversationsMembers({ payload }) {
  const { id } = payload;
  try {
    const { data } = yield call(NetworkService.makeAPIGetRequest, [messenger, id, members]);
    yield put(getConversationMembersSuccess(data));
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  }
}

function* getMessages({ payload }) {
  const { conversationId } = payload;
  try {
    const { data } = yield call(NetworkService.makeAPIGetRequest, [messenger, conversationId, messages]);
    yield put(getMessagesSuccess(data));
  } catch (err) {
    const error = getError(err);
    failure(error);
  }
}

function* sendMessage({ payload }) {
  const { data } = payload;
  try {
    yield socket.emit(MessengerActionTypes.CONVERSATION_NEW_MESSAGE, data);
  } catch (err) {
    const error = getError(err);
    failure(error);
  }
}

function* getNotSeenMessagesCount() {
  try {
    const { data } = yield call(NetworkService.makeAPIGetRequest, [messenger, notSeenMessages]);
    yield put(getNotSeenMessagesSuccess(data));
  } catch (err) {
    const error = getError(err);
    failure(error);
  }
}

function* putMessagesSeen({ payload }) {
  const options = {
    data: {
      messageIds: payload.data,
    },
  };

  try {
    yield call(NetworkService.makeAPIPutRequest, [messenger, messagesSeen], options);
  } catch (err) {
    const error = getError(err);
    failure(error);
  }
}

export function* messengerSagas() {
  yield all([
    takeEvery(MessengerActionTypes.GET_CONVERSATIONS_MEMBERS_REQUEST, getConversationsMembers),
    takeEvery(MessengerActionTypes.GET_CONVERSATION_MESSAGES_REQUEST, getMessages),
    takeLatest(MessengerActionTypes.POST_CONVERSATION_MESSAGE_REQUEST, sendMessage),
    takeEvery(MessengerActionTypes.GET_CONVERSATIONS_NOT_SEEN_MESSAGES_REQUEST, getNotSeenMessagesCount),
    takeLatest(MessengerActionTypes.PUT_CONVERSATION_MESSAGES_SEEN_REQUEST, putMessagesSeen),
  ]);
}
