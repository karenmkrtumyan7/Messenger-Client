import { connect } from 'react-redux';
import { SignIn } from '../../components/auth/SignIn';
import { signInRequest } from '../../actions/auth/AuthActionCreators';
import { selectAuthenticated } from '../../selectors';

const mapStateToProps = ({ auth }) => ({
  isAuth: selectAuthenticated(auth),
});

const mapDispatchToProps = (dispatch) => ({
  signInRequest: (payload) => dispatch(signInRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
