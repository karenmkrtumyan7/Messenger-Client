import { all, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';
import { getConversationMembersSuccess, getMessagesSuccess, sendMessageSuccess } from 'actions/messenger/MessengerActionCreators';
import { getError } from 'utils';
import { failure } from 'actions/settings/SettingsActionCreators';

function* getConversationsMembers({ payload }) {
  const { id } = payload;
  try {
    const members = [
      {
        avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg',
        userName: 'Thomas Bangalter',
        lastMessageTime: '2:09 PM',
        lastMessage: 'I was wondering...',
        _id: '1',
      },
      {
        avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/dog.png',
        userName: 'Dog Woofson',
        lastMessageTime: '1:44 PM',
        lastMessage: 'I\'ve forgotten how it felt before',
        _id: '2',
      },
      {
        avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/louis-ck.jpeg',
        userName: 'Louis CK',
        lastMessageTime: '2:09 PM',
        lastMessage: 'But we’re probably gonna need a new carpet.',
        _id: '3',
      },
      {
        avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg',
        userName: 'Bo Jackson',
        lastMessageTime: '2:09 PM',
        lastMessage: 'It’s not that bad...',
        _id: '4',
      },
    ];
    yield put(getConversationMembersSuccess(members));
  } catch (err) {
    const error = getError(err);
    yield put(failure(error));
  }
}

function* getMessages({ payload }) {
  const { from, to } = payload;
  try {
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
    yield put(getMessagesSuccess(messages));
  } catch (err) {
    const error = getError(err);
    failure(error);
  }
}

function* sendMessage({ payload }) {
  const { from, to, data } = payload;
  try {
    yield put(sendMessageSuccess({ from, to, data }));
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
