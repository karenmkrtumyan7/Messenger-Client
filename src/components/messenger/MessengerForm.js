import { Form } from 'antd';
import {
  MessengerInputStyled, MessengerSendStyled, SendOutlinedStyled, MessengerFormStyled,
} from 'components/messenger/Messenger.styled';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import socket from 'services/socket';
import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';
import _ from 'lodash';

const MessengerForm = (props) => {
  const {
    sendMessage, currentConversationUser, id,
  } = props;
  const [text, setText] = useState('');
  const handlerSend = () => {
    if (text) {
      sendMessage({
        from: id,
        to: currentConversationUser._id,
        conversationId: currentConversationUser.conversationId,
        text,
        date: new Date(),
      });
      setText('');
    }
  };

  useEffect(() => {
    setText('');
  }, [currentConversationUser]);

  const handlerTyping = ({ target }) => {
    socket.emit(MessengerActionTypes.CONVERSATION_TYPING, currentConversationUser.conversationId);

    if (_.isEmpty(target.value)) {
      socket.emit(MessengerActionTypes.CONVERSATION_TYPING_RESET, currentConversationUser.conversationId);
    }
    setText(target.value);
  };

  return (
    <Form onFinish={handlerSend}>
      <MessengerFormStyled>
        <MessengerInputStyled
          value={text}
          onChange={handlerTyping}
        />
        <MessengerSendStyled
          htmlType="submit"
          icon={<SendOutlinedStyled />}
        />
      </MessengerFormStyled>
    </Form>
  );
};

MessengerForm.propTypes = {
  currentConversationUser: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export { MessengerForm };
