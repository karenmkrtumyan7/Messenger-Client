import { ActiveChatStyled, BubbleStyled } from 'components/messenger/Messenger.styled';
import _ from 'lodash';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ActiveChat = (props) => {
  const {
    messages, getMessages, id, currentConversationUser, scrollToBottom,
  } = props;

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (id) {
      getMessages(id, currentConversationUser);
    }
  }, [getMessages, currentConversationUser, id]);

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
