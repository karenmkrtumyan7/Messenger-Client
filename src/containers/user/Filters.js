import { connect } from 'react-redux';
import { Filters } from '../../components/user/Filters';
import { getUsersByFilter } from '../../actions/user/UserActionCreator';

const mapDispatchToProps = (dispatch) => ({
  getUsersByFilter: (filterParams) => dispatch(getUsersByFilter(filterParams)),
});

export default connect(null, mapDispatchToProps)(Filters);
