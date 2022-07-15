import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserReportActions } from 'components/user/UserReportActions';
import { deleteUserRequest } from 'actions/user/UserActionCreator';

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    deleteUser: deleteUserRequest,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(UserReportActions);
