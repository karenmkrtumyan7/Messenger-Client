import { Form } from 'antd';
import {
  MessengerInputStyled, MessengerSendStyled, SendOutlinedStyled, MessengerFormStyled,
} from 'components/messenger/Messenger.styled';

const MessengerForm = () => (
  <Form>
    <MessengerFormStyled>
      <MessengerInputStyled />
      <MessengerSendStyled icon={<SendOutlinedStyled />} />
    </MessengerFormStyled>
  </Form>
);

export { MessengerForm };
