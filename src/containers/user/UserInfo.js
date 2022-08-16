import { connect } from 'react-redux';
import { getUserRequest } from 'actions/user/UserActionCreator';
import { UserInfo } from 'components/user/UserInfo';
import { bindActionCreators } from 'redux';
import { selectUser } from 'selectors/Users.selectors';

const mapStateToProps = ({ user }) => ({
  user: selectUser(user),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getUser: getUserRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
