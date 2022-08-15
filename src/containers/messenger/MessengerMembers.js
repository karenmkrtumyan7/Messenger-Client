import { connect } from 'react-redux';
import { selectMembers, selectNotSeenMessages } from 'selectors/Messenger.selectors';
import { bindActionCreators } from 'redux';
import { getConversationsMembersRequest, getNotSeenMessagesRequest } from 'actions/messenger/MessengerActionCreators';
import { MessengerMembers } from 'components/messenger/MessengerMembers';
import { selectAuthUserId } from 'selectors/Auth.selectors';

const mapStateToProps = ({ messenger, auth }) => ({
  members: selectMembers(messenger),
  id: selectAuthUserId(auth),
  notSeenMessages: selectNotSeenMessages(messenger),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getMembers: getConversationsMembersRequest,
    getNotSeenMessages: getNotSeenMessagesRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(MessengerMembers);
