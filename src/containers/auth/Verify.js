import { connect } from 'react-redux';
import { verifyRequest } from '../../actions/auth/AuthActionCreators';
import { Verify } from '../../components/auth/Verify';
import { selectVerifyMessage } from '../../selectors';

const mapStateToProps = ({ auth }) => ({
  message: selectVerifyMessage(auth),
});

const mapDispatchToProps = (dispatch) => ({
  verifyRequest: (id) => dispatch(verifyRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
