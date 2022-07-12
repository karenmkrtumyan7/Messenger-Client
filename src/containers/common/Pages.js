import { connect } from 'react-redux';
import { selectErrorMessages, selectLoading } from '../../selectors';
import { resetFailure } from '../../actions/settings/SettingsActionCreators';
import { Pages } from '../../pages/Pages';

const mapStateToProps = ({ settings }) => ({
  messages: selectErrorMessages(settings),
  isLoading: selectLoading(settings),
});

const mapDispatchToProps = (dispatch) => ({
  resetFailure: () => dispatch(resetFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
