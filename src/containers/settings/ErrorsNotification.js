import { connect } from 'react-redux';
import { resetFailure } from '../../actions/settings/SettingsActionCreators';
import { ErrorsNotification } from '../../components/settings/ErrorsNotification';
import { selectErrorMessages } from '../../selectors/Settings.selector';

const mapStateToProps = ({ settings }) => ({
  messages: selectErrorMessages(settings),
});

const mapDispatchToProps = (dispatch) => ({
  resetFailure: () => dispatch(resetFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsNotification);
