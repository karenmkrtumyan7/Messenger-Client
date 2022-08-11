import { all, call, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';
import { getConversationMembersSuccess, getMessagesSuccess, sendMessageSuccess } from 'actions/messenger/MessengerActionCreators';
import { getError } from 'utils';
import { failure } from 'actions/settings/SettingsActionCreators';
import socket from 'services/socket';
import NetworkService from 'services/network.service';

function* getConversationsMembers({ payload }) {
  const { id } = payload;
  try {
    const { data } = yield call(NetworkService.makeAPIGetRequest, ['messenger', id, 'members']);
    yield put(getConversationMembersSuccess(data));
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  }
}

function* getMessages({ payload }) {
  const { conversationId } = payload;
  try {
    const { data } = yield call(NetworkService.makeAPIGetRequest, ['messenger', conversationId, 'messages']);
    yield put(getMessagesSuccess(data));
  } catch (err) {
    const error = getError(err);
    failure(error);
  }
}

function* sendMessage({ payload }) {
  const { data } = payload;
  try {
    yield socket.emit('CONVERSATION:NEW_MESSAGE', data);
    // yield put(sendMessageSuccess({ data }));
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
  ]);
}
