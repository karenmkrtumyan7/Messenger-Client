import UserSearch from 'containers/messenger/UserSearch';
import { MessengerHeader } from 'components/messenger/MessengerHeader';
import MessengerForm from 'containers/messenger/MessengerForm';
import {
  ActiveChatInnerStyled,
  ActiveChatWrapperStyled, LeftStyled, MessengerFormWrapperStyled, MessengerStyled, RightStyled, SearchStyled, UserItemsStyled,
} from 'components/messenger/Messenger.styled';
import ActiveChat from 'containers/messenger/ActiveChat';
import MessengerMembers from 'containers/messenger/MessengerMembers';
import { useState, useRef, useEffect } from 'react';
import { selectMembers } from 'selectors/Messenger.selectors';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getConversationMembersReset, getConversationMessagesReset, getNotSeenMessagesReset } from 'actions/messenger/MessengerActionCreators';
import { bindActionCreators } from 'redux';

const Messenger = (props) => {
  const {
    members, getMembersReset, notSeenMessagesReset, getMessagesReset,
  } = props;
  const [currentConversationUser, setCurrentConversationUser] = useState({});
  const [membersFiltered, setMembersFiltered] = useState(members);
  const messagesToBottomRef = useRef(null);
  const scrollToBottom = () => {
    messagesToBottomRef.current?.scrollIntoView();
  };

  useEffect(() => () => {
    getMembersReset();
    notSeenMessagesReset();
    getMessagesReset();
  }, [getMembersReset, notSeenMessagesReset, getMessagesReset]);

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
  getMembersReset: PropTypes.func.isRequired,
  notSeenMessagesReset: PropTypes.func.isRequired,
  getMessagesReset: PropTypes.func.isRequired,
};

const mapStateToProps = ({ messenger }) => ({
  members: selectMembers(messenger),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getMessagesReset: getConversationMessagesReset,
    getMembersReset: getConversationMembersReset,
    notSeenMessagesReset: getNotSeenMessagesReset,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
