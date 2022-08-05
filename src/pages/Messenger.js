import { UserSearch } from 'components/messenger/UserSearch';
import { MessengerHeader } from 'components/messenger/MessengerHeader';
import MessengerForm from 'containers/messenger/MessengerForm';
import {
  ActiveChatWrapperStyled, LeftStyled, MessengerFormWrapperStyled, MessengerStyled, RightStyled, SearchStyled, UserItemsStyled,
} from 'components/messenger/Messenger.styled';
import ActiveChat from 'containers/messenger/ActiveChat';
import MessengerMembers from 'containers/messenger/MessengerMembers';
import { useState, useRef } from 'react';

const Messenger = () => {
  const [currentConversationUser, setCurrentConversationUser] = useState({});

  const messagesToBottomRef = useRef(null);
  const scrollToBottom = () => {
    messagesToBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MessengerStyled>
      <LeftStyled>
        <SearchStyled>
          <UserSearch />
        </SearchStyled>
        <UserItemsStyled>
          <MessengerMembers
            currentConversationUser={currentConversationUser}
            setCurrentConversationUser={setCurrentConversationUser}
          />
        </UserItemsStyled>
      </LeftStyled>
      <RightStyled>
        <MessengerHeader currentConversationUser={currentConversationUser} />
        <ActiveChatWrapperStyled>
          <div>
            <ActiveChat
              currentConversationUser={currentConversationUser}
              scrollToBottom={scrollToBottom}
            />
            <div ref={messagesToBottomRef} />
          </div>
        </ActiveChatWrapperStyled>
        <MessengerFormWrapperStyled>
          <MessengerForm
            currentConversationUser={currentConversationUser}
            scrollToBottom={scrollToBottom}
          />
        </MessengerFormWrapperStyled>
      </RightStyled>
    </MessengerStyled>
  );
};

export { Messenger };
