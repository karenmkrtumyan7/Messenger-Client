import { connect } from 'react-redux';
import { UserReport } from '../../components/user/UserReport';
import { getUsersRequest } from '../../actions/user/UserActionCreator';

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsersRequest()),
});

export default connect(null, mapDispatchToProps)(UserReport);
