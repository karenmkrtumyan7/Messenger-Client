import { ToStyled, ToUserNameStyled } from 'components/messenger/Messenger.styled';

const To = () => (
  <ToStyled>
    <span>
      {'To: '}
      <ToUserNameStyled>Thomas Bangalter</ToUserNameStyled>
    </span>
  </ToStyled>
);

export { To };
