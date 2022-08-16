import { connect } from 'react-redux';
import { selectMessages, selectNotSeenMessages } from 'selectors/Messenger.selectors';
import { ActiveChat } from 'components/messenger/ActiveChat';
import {
  getConversationsMembersRequest, getConversationMessagesRequest, getNotSeenMessagesRequest, userMessagesSeenRequest, newMessage,
} from 'actions/messenger/MessengerActionCreators';
import { bindActionCreators } from 'redux';
import { selectAuthUserId } from 'selectors/Auth.selectors';

const mapStateToProps = ({ messenger, auth }) => ({
  messages: selectMessages(messenger),
  id: selectAuthUserId(auth),
  notSeenMessages: selectNotSeenMessages(messenger),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getMessages: getConversationMessagesRequest,
    newMessage,
    getMembers: getConversationsMembersRequest,
    getNotSeenMessages: getNotSeenMessagesRequest,
    messagesSeen: userMessagesSeenRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ActiveChat);
