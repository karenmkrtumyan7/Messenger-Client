import UserItem from 'components/messenger/UserItem';
import { UserSearch } from 'components/messenger/UserSearch';
import { MessengerHeader } from 'components/messenger/MessengerHeader';
import { MessengerForm } from 'components/messenger/MessengerForm';
import {
  ActiveChatWrapperStyled, LeftStyled, MessengerFormWrapperStyled, MessengerStyled, RightStyled, SearchStyled, UserItemsStyled,
} from 'components/messenger/Messenger.styled';
import { ActiveChat } from 'components/messenger/ActiveChat';

const Messenger = () => (
  <MessengerStyled>
    <LeftStyled>
      <SearchStyled>
        <UserSearch />
      </SearchStyled>
      <UserItemsStyled>
        <UserItem />
      </UserItemsStyled>
    </LeftStyled>
    <RightStyled>
      <MessengerHeader />
      <ActiveChatWrapperStyled>
        <div>
          <ActiveChat />
        </div>
      </ActiveChatWrapperStyled>
      <MessengerFormWrapperStyled>
        <MessengerForm />
      </MessengerFormWrapperStyled>
    </RightStyled>
  </MessengerStyled>
);

export { Messenger };
