import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserEditModal } from 'components/user/UserEditModal';
import { editUserRequest } from 'actions/user/UserActionCreator';

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    editUser: editUserRequest,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(UserEditModal);
