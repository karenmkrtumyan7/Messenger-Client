import { connect } from 'react-redux';
import { selectAuthUserId } from 'selectors/Auth.selectors';
import { AvatarUpload } from 'components/user/AvatarUpload';

const mapStateToProps = ({ auth }) => ({
  id: selectAuthUserId(auth),
});

export default connect(mapStateToProps)(AvatarUpload);
