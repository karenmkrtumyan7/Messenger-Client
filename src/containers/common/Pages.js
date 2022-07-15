import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectErrorMessage, selectLoading, selectSuccessMessage } from 'selectors';
import { resetFailure, resetSuccess } from 'actions/settings/SettingsActionCreators';
import { Pages } from 'pages/Pages';

const mapStateToProps = ({ settings }) => ({
  successMessage: selectSuccessMessage(settings),
  errorMessage: selectErrorMessage(settings),
  isLoading: selectLoading(settings),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    resetFailure,
    resetSuccess,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
