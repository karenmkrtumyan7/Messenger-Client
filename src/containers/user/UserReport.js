import { connect } from 'react-redux';
import { getUsers } from '../../selectors';
import { UserReport } from '../../components/user/UserReport';
import { getUsersRequest } from '../../actions/user/UserActionCreator';

const mapStateToProps = ({ user }) => ({
  users: getUsers(user),
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsersRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserReport);
