import { Form } from 'antd';
import {
  MessengerInputStyled, MessengerSendStyled, SendOutlinedStyled, MessengerFormStyled,
} from 'components/messenger/Messenger.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

const MessengerForm = (props) => {
  const { sendMessage, currentConversationUser, id } = props;
  const [text, setText] = useState('');
  const handlerSend = () => {
    if (text) {
      sendMessage({
        from: id,
        to: '62e37f157b6bf14554a0a415',
        text,
        date: new Date(),
      });
      setText('');
    }
  };

  return (
    <Form onFinish={handlerSend}>
      <MessengerFormStyled>
        <MessengerInputStyled
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
        <MessengerSendStyled icon={<SendOutlinedStyled />} />
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
