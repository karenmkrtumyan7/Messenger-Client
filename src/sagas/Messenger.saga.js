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
    const { data } = yield call(NetworkService.makeAPIGetRequest, ['messenger', '62f3b24f5da6f140cc79bb83', 'messages']);
    const messages = [
      {
        from: 'id1',
        to: 'id2',
        text: 'Barev',
        _id: '1',
      },
      {
        from: 'id2',
        to: 'id1',
        text: 'Barev',
        _id: '2',
      },
      {
        from: 'id1',
        to: 'id2',
        text: 'Inch ka?',
        _id: '3',
      },
      {
        from: 'id1',
        to: 'id2',
        text: 'Vonc es',
        _id: '4',
      },
      {
        from: 'id1',
        to: 'id2',
        text: '?',
        _id: '5',
      },
      {
        from: 'id2',
        to: 'id1',
        text: 'Lav du asa',
        _id: '6',
      },
      {
        from: 'id1',
        to: 'id2',
        text: 'Lav',
        _id: '7',
      },
    ];
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
    yield put(sendMessageSuccess({ data }));
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
