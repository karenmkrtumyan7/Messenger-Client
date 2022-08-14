import { ActiveChatStyled, BubbleStyled } from 'components/messenger/Messenger.styled';
import _ from 'lodash';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import socket from 'services/socket';
import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';

const ActiveChat = (props) => {
  const {
    messages, getMessages, id, currentConversationUser, scrollToBottom, newMessage, getMembers,
  } = props;

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (currentConversationUser.conversationId) {
      getMessages(currentConversationUser.conversationId);
    }
  }, [getMessages, currentConversationUser]);

  useEffect(() => {
    socket.emit(MessengerActionTypes.CONVERSATION_JOIN, id);
  }, [id]);

  useEffect(() => {
    socket.on(MessengerActionTypes.CONVERSATION_NEW_MESSAGE, (message) => {
      if (message) {
        if (message.conversationId === currentConversationUser.conversationId) {
          getMembers(id);
          newMessage(message);
        }
      }
    });
    return () => {
      socket.off(MessengerActionTypes.CONVERSATION_NEW_MESSAGE);
    };
  }, [newMessage, getMembers, id, currentConversationUser.conversationId]);

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
};

export { ActiveChat };
