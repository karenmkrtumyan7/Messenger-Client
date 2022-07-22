import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserReportActions } from 'components/user/UserReportActions';
import { deleteUserRequest } from 'actions/user/UserActionCreator';
import { selectIsAdmin, selectUserId, selectUsersPermissions } from 'selectors/Auth.selectors';

const mapStateToProps = ({ auth }) => ({
  currentUserId: selectUserId(auth),
  usersPermissions: selectUsersPermissions(auth),
  isAdmin: selectIsAdmin(auth),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    deleteUser: deleteUserRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(UserReportActions);
