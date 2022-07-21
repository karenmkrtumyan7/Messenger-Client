import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUpRequest } from 'actions/auth/AuthActionCreators';
import { SignUp } from 'components/auth/SignUp';
import { selectRegistered } from 'selectors/Auth.selectors';

const mapStateToProps = ({ auth }) => ({
  registered: selectRegistered(auth),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    signUpRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
