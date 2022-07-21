import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Filters } from 'components/user/Filters';
import { getUsersRequest } from 'actions/user/UserActionCreator';

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getUsers: getUsersRequest,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(Filters);
