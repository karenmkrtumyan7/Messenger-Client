import { connect } from 'react-redux';
import { selectMembers } from 'selectors/Messenger.selectors';
import { bindActionCreators } from 'redux';
import { getConversationsMembersRequest } from 'actions/messenger/MessengerActionCreators';
import { MessengerMembers } from 'components/messenger/MessengerMembers';
import { selectAuthUserId } from 'selectors/Auth.selectors';

const mapStateToProps = ({ messenger, auth }) => ({
  members: selectMembers(messenger),
  id: selectAuthUserId(auth),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getMembers: getConversationsMembersRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(MessengerMembers);