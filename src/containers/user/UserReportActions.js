import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserReportActions } from 'components/user/UserReportActions';
import { deleteUserRequest } from 'actions/user/UserActionCreator';
import { selectAuthUserId, selectAuthUserResources } from 'selectors/Auth.selectors';

const mapStateToProps = ({ auth }) => ({
  currentUserId: selectAuthUserId(auth),
  resources: selectAuthUserResources(auth),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    deleteUser: deleteUserRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(UserReportActions);
