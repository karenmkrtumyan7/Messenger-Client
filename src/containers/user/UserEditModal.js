import { connect } from 'react-redux';
import { UserEditModal } from '../../components/user/UserEditModal';
import { editUserRequest } from '../../actions/user/UserActionCreator';

const mapDispatchToProps = {
  edit: (userChanges) => editUserRequest(userChanges),
};

export default connect(null, mapDispatchToProps)(UserEditModal);
