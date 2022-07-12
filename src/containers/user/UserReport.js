import { connect } from 'react-redux';
import {
  selectUsersData, selectUsersCount, selectUsersLoading, selectUserChange,
} from '../../selectors';
import { UserReport } from '../../components/user/UserReport';
import { editUserReset, getUsersRequest } from '../../actions/user/UserActionCreator';

const mapStateToProps = ({ user }) => ({
  data: selectUsersData(user),
  count: selectUsersCount(user),
  loading: selectUsersLoading(user),
  change: selectUserChange(user),
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: (page, limit) => dispatch(getUsersRequest(page, limit)),
  resetChange: () => dispatch(editUserReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserReport);
