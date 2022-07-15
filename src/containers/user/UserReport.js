import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  selectUsersData, selectUsersCount, selectUsersLoading, selectUserChange,
} from 'selectors';
import { UserReport } from 'components/user/UserReport';
import { editUserReset, getUsersRequest } from 'actions/user/UserActionCreator';

const mapStateToProps = ({ user }) => ({
  data: selectUsersData(user),
  count: selectUsersCount(user),
  loading: selectUsersLoading(user),
  change: selectUserChange(user),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getUsers: getUsersRequest,
    resetChange: editUserReset,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(UserReport);
