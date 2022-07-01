import { connect } from 'react-redux';
import { SignIn } from '../../components/auth/SignIn';
import { signInRequest } from '../../actions/auth/AuthActionCreators';
import { selectAuthData } from '../../selectors';

const mapStateToProps = ({ auth }) => ({
  authData: selectAuthData(auth),
});

const mapDispatchToProps = (dispatch) => ({
  signInRequest: (payload) => dispatch(signInRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
