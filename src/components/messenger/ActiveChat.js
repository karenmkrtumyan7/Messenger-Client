import { ActiveChatStyled, BubbleStyled } from 'components/messenger/Messenger.styled';
import _ from 'lodash';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import socket from 'services/socket';
import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';
import { Typing } from 'components/messenger/Typing';

const ActiveChat = (props) => {
  const {
    messages, getMessages, id, currentConversationUser, scrollToBottom,
    newMessage, getMembers, getNotSeenMessages, messagesSeen, notSeenMessages,
  } = props;

  useEffect(
    () => {
      const seenMessagesIds = notSeenMessages.find((message) => message.conversationId === currentConversationUser.conversationId)?.ids;
      if (!_.isEmpty(seenMessagesIds)) {
        messagesSeen(seenMessagesIds);
      }
    },
    [currentConversationUser.conversationId, getMembers, id, notSeenMessages, messagesSeen, getNotSeenMessages],
  );

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (currentConversationUser.conversationId) {
      getMessages(currentConversationUser.conversationId);
    }
  }, [getMessages, currentConversationUser.conversationId]);

  useEffect(() => {
    socket.emit(MessengerActionTypes.CONVERSATION_JOIN, id);
  }, [id]);

  useEffect(() => {
    socket.on(MessengerActionTypes.CONVERSATION_NEW_MESSAGE, (message) => {
      if (message) {
        getMembers(id);
        if (message.conversationId === currentConversationUser.conversationId) {
          newMessage(message);
          if (message.to === id) {
            messagesSeen([message._id]);
          }
        } else {
          getNotSeenMessages();
        }
      }
    });
    return () => {
      socket.off(MessengerActionTypes.CONVERSATION_NEW_MESSAGE);
    };
  }, [newMessage, getMembers, id, currentConversationUser.conversationId, getNotSeenMessages, messagesSeen]);

  return (
    !_.isEmpty(messages) && (
      <ActiveChatStyled>
        {
          messages.map((message) => (
            <BubbleStyled
              key={message._id}
              me={id === message.from}
            >
              { message.text }
            </BubbleStyled>
          ))
        }
        <Typing />
      </ActiveChatStyled>
    )
  );
};

ActiveChat.propTypes = {
  messages: PropTypes.array.isRequired,
  getMessages: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  currentConversationUser: PropTypes.object.isRequired,
  scrollToBottom: PropTypes.func.isRequired,
  newMessage: PropTypes.func.isRequired,
  getMembers: PropTypes.func.isRequired,
  getNotSeenMessages: PropTypes.func.isRequired,
  messagesSeen: PropTypes.func.isRequired,
  notSeenMessages: PropTypes.array.isRequired,
};

export { ActiveChat };
