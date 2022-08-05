import { connect } from 'react-redux';
import { selectMessages } from 'selectors/Messenger.selectors';
import { ActiveChat } from 'components/messenger/ActiveChat';
import { getMessagesRequest } from 'actions/messenger/MessengerActionCreators';
import { bindActionCreators } from 'redux';
import { selectAuthUserId } from 'selectors/Auth.selectors';

const mapStateToProps = ({ messenger, auth }) => ({
  messages: selectMessages(messenger),
  id: selectAuthUserId(auth),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getMessages: getMessagesRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ActiveChat);
