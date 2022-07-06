import { connect } from 'react-redux';
import { selectUsers, selectAllUsersCount, selectUsersLoading } from '../../selectors';
import { UserReport } from '../../components/user/UserReport';
import { getUsersRequest } from '../../actions/user/UserActionCreator';

const mapStateToProps = ({ user }) => ({
  users: selectUsers(user),
  count: selectAllUsersCount(user),
  loading: selectUsersLoading(user),
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: (pageIndex, pageSize) => dispatch(getUsersRequest(pageIndex, pageSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserReport);
