import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verifyRequest } from 'actions/auth/AuthActionCreators';
import { Verify } from 'components/auth/Verify';
import { selectVerifyMessage } from 'selectors';

const mapStateToProps = ({ auth }) => ({
  message: selectVerifyMessage(auth),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    verifyRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
