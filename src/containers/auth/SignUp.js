import { connect } from 'react-redux';
import { signUpRequest, signUpReset } from '../../actions/auth/AuthActionCreators';
import { SignUp } from '../../components/auth/SignUp';
import { selectRegistered } from '../../selectors/Auth.selectors';

const mapStateToProps = ({ auth }) => ({
  registered: selectRegistered(auth),
});

const mapDispatchToProps = (dispatch) => ({
  signUpRequest: (payload) => dispatch(signUpRequest(payload)),
  signUpReset: () => dispatch(signUpReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
