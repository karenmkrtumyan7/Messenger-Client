import { Row } from 'antd';
import {
  AccountInfoDetailsTitlesWrapper, AccountInfoDetailsWrapper, AccountInfoMainWrapper, AccountInfoTitle, AccountInfoWrapper,
} from 'components/user/User.styled';

const AccountInfo = () => (
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
          <p>1</p>
          <p>karen32</p>
          <p>karen@gmail.com</p>
          <p>+374 00 0000000</p>
        </AccountInfoDetailsWrapper>
      </Row>
    </AccountInfoWrapper>
  </AccountInfoMainWrapper>
);

export { AccountInfo };
