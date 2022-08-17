import { ActiveChatStyled, BubbleStyled } from 'components/messenger/Messenger.styled';
import _ from 'lodash';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import socket from 'services/socket';
import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';
import { Typing } from 'components/messenger/Typing';
import { Popover } from 'antd';
import { MessageActions } from 'components/messenger/MessageActions';

const ActiveChat = (props) => {
  const {
    messages, getMessages, id, currentConversationUser, scrollToBottom,
    newMessage, getMembers, getNotSeenMessages, messagesSeen, notSeenMessages,
    userTyping, userTypingReset, isUserTyping,
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
  }, [messages, scrollToBottom, isUserTyping]);

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

  useEffect(() => {
    socket.on(MessengerActionTypes.CONVERSATION_TYPING, (conversationId) => {
      if (conversationId === currentConversationUser.conversationId) {
        userTyping();
      }
    });

    return () => {
      socket.off(MessengerActionTypes.CONVERSATION_TYPING);
    };
  }, [currentConversationUser.conversationId, userTyping]);

  useEffect(() => {
    socket.on(MessengerActionTypes.CONVERSATION_TYPING_RESET, (conversationId) => {
      if (conversationId === currentConversationUser.conversationId) {
        userTypingReset();
      }
    });

    return () => {
      socket.off(MessengerActionTypes.CONVERSATION_TYPING_RESET);
    };
  }, [currentConversationUser.conversationId, userTypingReset]);

  useEffect(() => () => {
    userTypingReset();
    socket.emit(MessengerActionTypes.CONVERSATION_TYPING_RESET, currentConversationUser.conversationId);
  }, [currentConversationUser.conversationId, userTypingReset]);

  useEffect(() => {
    socket.on(MessengerActionTypes.CONVERSATION_MESSAGE_DELETE, () => {
      getMembers(id);
      getMessages(currentConversationUser.conversationId);
    });

    return () => {
      socket.off(MessengerActionTypes.CONVERSATION_MESSAGE_DELETE);
    };
  }, [getMembers, currentConversationUser.conversationId, getMessages, id]);

  return (
    !_.isEmpty(messages) && (
      <ActiveChatStyled>
        {
          messages.map((message) => (
            <Popover
              trigger="hover"
              content={(id === message.from) && <MessageActions message={message} />}
              key={message._id}
            >
              <BubbleStyled
                me={id === message.from}
              >
                { message.text }
              </BubbleStyled>
            </Popover>
          ))
        }
        { isUserTyping && <Typing /> }
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
  userTyping: PropTypes.func.isRequired,
  userTypingReset: PropTypes.func.isRequired,
  isUserTyping: PropTypes.bool.isRequired,
};

export { ActiveChat };
