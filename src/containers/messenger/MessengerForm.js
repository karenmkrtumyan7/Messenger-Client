import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessageRequest } from 'actions/messenger/MessengerActionCreators';
import { MessengerForm } from 'components/messenger/MessengerForm';
import { selectAuthUserId } from 'selectors/Auth.selectors';

const mapStateToProps = ({ auth }) => ({
  id: selectAuthUserId(auth),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    sendMessage: sendMessageRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(MessengerForm);
