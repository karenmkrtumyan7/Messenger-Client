import { Row } from 'antd';
import {
  AccountInfoDetailsTitlesWrapper, AccountInfoDetailsWrapper, AccountInfoMainWrapper, AccountInfoTitle, AccountInfoWrapper,
} from 'components/user/User.styled';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

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
        <AccountInfoTitle>Account Info</AccountInfoTitle>
        <Row>
          <AccountInfoDetailsTitlesWrapper>
            <p>User ID:</p>
            <p>Username:</p>
            <p>Email:</p>
            <p>Contact:</p>
          </AccountInfoDetailsTitlesWrapper>
          <AccountInfoDetailsWrapper>
            <p>{ id }</p>
            <p>{ userName }</p>
            <p>{ email }</p>
            <p>{ contact }</p>
          </AccountInfoDetailsWrapper>
        </Row>
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
