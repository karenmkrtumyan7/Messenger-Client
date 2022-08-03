import { MessengerHeaderStyled, ToUserNameStyled } from 'components/messenger/Messenger.styled';

const MessengerHeader = () => (
  <MessengerHeaderStyled>
    <span>
      {'To: '}
      <ToUserNameStyled>Thomas Bangalter</ToUserNameStyled>
    </span>
  </MessengerHeaderStyled>
);

export { MessengerHeader };
