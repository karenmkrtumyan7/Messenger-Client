import { Banner } from 'components/common/Banner';
import { AccountInfo } from 'components/user/AccountInfo';
import { BannerStyled } from 'components/styledComponents/Banner/BannerStyled';
import { AccountStyled } from 'components/user/User.styled';
import { connect } from 'react-redux';
import { getUserDetailsRequest } from 'actions/auth/AuthActionCreators';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

const Account = (props) => {
  const { getUserDetails } = props;
  return (
    <BannerStyled>
      <AccountStyled>
        <Banner />
        <AccountInfo getUserDetails={getUserDetails} />
      </AccountStyled>
    </BannerStyled>
  );
};

Account.propTypes = {
  getUserDetails: PropTypes.func,
};

Account.defaultProps = {
  getUserDetails: null,
};

// const mapStateToProps = ({ auth }) => ({
//
// });

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getUserDetails: getUserDetailsRequest,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(Account);
