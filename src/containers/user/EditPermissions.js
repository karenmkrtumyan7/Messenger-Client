import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetChangeStatus } from 'actions/settings/SettingsActionCreators';
import { EditPermissions } from 'components/user/EditPermissions';
import { selectChangeStatus } from 'selectors/Settings.selector';
import { updatePermissionsRequest } from 'actions/user/UserActionCreator';

const mapStateToProps = ({ settings }) => ({
  changeStatus: selectChangeStatus(settings),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    resetChangeStatus,
    updatePermissions: updatePermissionsRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(EditPermissions);
