import { connect } from 'react-redux';
import { UserSearch } from 'components/messenger/UserSearch';
import { selectMembers } from 'selectors/Messenger.selectors';

const mapStateToProps = ({ messenger }) => ({
  members: selectMembers(messenger),
});

export default connect(mapStateToProps)(UserSearch);
