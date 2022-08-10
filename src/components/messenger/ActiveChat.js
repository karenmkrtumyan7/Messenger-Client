import { ActiveChatStyled, BubbleStyled } from 'components/messenger/Messenger.styled';
import _ from 'lodash';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import socket from 'services/socket';

const ActiveChat = (props) => {
  const {
    messages, getMessages, id, currentConversationUser, scrollToBottom,
  } = props;

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (id) {
      getMessages(id, currentConversationUser._id);
    }
  }, [getMessages, currentConversationUser, id]);

  useEffect(() => {
    socket.on('CONVERSATION:NEW_MESSAGE', (message) => {
      console.log(message);
    });
  }, []);

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
};

export { ActiveChat };
