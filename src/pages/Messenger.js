import UserSearch from 'containers/messenger/UserSearch';
import { MessengerHeader } from 'components/messenger/MessengerHeader';
import MessengerForm from 'containers/messenger/MessengerForm';
import {
  ActiveChatInnerStyled,
  ActiveChatWrapperStyled, LeftStyled, MessengerFormWrapperStyled, MessengerStyled, RightStyled, SearchStyled, UserItemsStyled,
} from 'components/messenger/Messenger.styled';
import ActiveChat from 'containers/messenger/ActiveChat';
import MessengerMembers from 'containers/messenger/MessengerMembers';
import { useState, useRef } from 'react';
import { selectMembers } from 'selectors/Messenger.selectors';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Messenger = (props) => {
  const { members } = props;
  const [currentConversationUser, setCurrentConversationUser] = useState({});
  const [membersFiltered, setMembersFiltered] = useState(members);
  const messagesToBottomRef = useRef(null);
  const scrollToBottom = () => {
    messagesToBottomRef.current?.scrollIntoView();
  };

  return (
    <MessengerStyled>
      <LeftStyled>
        <SearchStyled>
          <UserSearch setMembersFiltered={setMembersFiltered} />
        </SearchStyled>
        <UserItemsStyled>
          <MessengerMembers
            currentConversationUser={currentConversationUser}
            setCurrentConversationUser={setCurrentConversationUser}
            membersFiltered={membersFiltered}
            setMembersFiltered={setMembersFiltered}
          />
        </UserItemsStyled>
      </LeftStyled>
      <RightStyled>
        <MessengerHeader currentConversationUser={currentConversationUser} />
        <ActiveChatWrapperStyled>
          <ActiveChatInnerStyled>
            <ActiveChat
              currentConversationUser={currentConversationUser}
              scrollToBottom={scrollToBottom}
            />
            <div ref={messagesToBottomRef} />
          </ActiveChatInnerStyled>
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

Messenger.propTypes = {
  members: PropTypes.array.isRequired,
};

const mapStateToProps = ({ messenger }) => ({
  members: selectMembers(messenger),
});

export default connect(mapStateToProps)(Messenger);
