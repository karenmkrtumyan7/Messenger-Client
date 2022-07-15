import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SignIn } from 'components/auth/SignIn';
import { signInRequest } from 'actions/auth/AuthActionCreators';
import { selectAuthData } from 'selectors';

const mapStateToProps = ({ auth }) => ({
  authData: selectAuthData(auth),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    signInRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
