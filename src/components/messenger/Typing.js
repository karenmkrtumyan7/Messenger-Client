import { ItalicStyled } from 'Global.styled';
import { TypingDotStyled, TypingStyled } from 'components/messenger/Messenger.styled';

export const Typing = () => (
  <TypingStyled>
    <ItalicStyled>
      Typing
    </ItalicStyled>
    <TypingDotStyled />
    <TypingDotStyled />
    <TypingDotStyled />
  </TypingStyled>
);
