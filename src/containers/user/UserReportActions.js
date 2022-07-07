import { connect } from 'react-redux';
import { UserReportActions } from '../../components/user/UserReportActions';
import { deleteUserRequest } from '../../actions/user/UserActionCreator';

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteUserRequest(id)),
});

export default connect(null, mapDispatchToProps)(UserReportActions);
