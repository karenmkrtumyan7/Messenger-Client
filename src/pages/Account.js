import { Banner } from 'components/common/Banner';
import { AccountInfo } from 'components/user/AccountInfo';
import { BannerStyled } from 'components/styledComponents/Banner/BannerStyled';
import { AccountStyled } from 'components/user/User.styled';
import { connect } from 'react-redux';
import { getUserDetailsRequest } from 'actions/auth/AuthActionCreators';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { selectAuthUser, selectRole } from 'selectors/Auth.selectors';

const Account = (props) => {
  const { getUserDetails, user, role } = props;
  return (
    <BannerStyled>
      <AccountStyled>
        <Banner role={role} />
        <AccountInfo
          getUserDetails={getUserDetails}
          user={user}
        />
      </AccountStyled>
    </BannerStyled>
  );
};

Account.propTypes = {
  getUserDetails: PropTypes.func,
  user: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
};

Account.defaultProps = {
  getUserDetails: null,
};

const mapStateToProps = ({ auth }) => ({
  user: selectAuthUser(auth),
  role: selectRole(auth),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getUserDetails: getUserDetailsRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Account);
