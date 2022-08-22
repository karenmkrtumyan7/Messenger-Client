import {
  AccountInfoDetailsStyled, AccountInfoDetailsTitlesWrapper, AccountInfoDetailsWrapperStyled,
  AccountInfoMainWrapper, AccountInfoTitle, AccountInfoWrapper, AvatarWrapperStyled,
} from 'components/user/User.styled';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AvatarUpload from 'containers/auth/AvatarUpload';

const AccountInfo = (props) => {
  const { getUserDetails, user } = props;
  const {
    userName, _id: id, email, contact,
  } = user;

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  return (
    <AccountInfoMainWrapper>
      <AccountInfoWrapper>
        <AvatarWrapperStyled>
          <AvatarUpload />
        </AvatarWrapperStyled>
        <AccountInfoTitle>Account Info</AccountInfoTitle>
        <AccountInfoDetailsWrapperStyled>
          <AccountInfoDetailsTitlesWrapper>
            <p>User ID:</p>
            <p>Username:</p>
            <p>Email:</p>
            <p>Contact:</p>
          </AccountInfoDetailsTitlesWrapper>
          <AccountInfoDetailsStyled>
            <p>{ id }</p>
            <p>{ userName }</p>
            <p>{ email }</p>
            <p>{ contact }</p>
          </AccountInfoDetailsStyled>
        </AccountInfoDetailsWrapperStyled>
      </AccountInfoWrapper>
    </AccountInfoMainWrapper>
  );
};

AccountInfo.propTypes = {
  getUserDetails: PropTypes.func,
  user: PropTypes.object.isRequired,
};

AccountInfo.defaultProps = {
  getUserDetails: null,
};

export { AccountInfo };
