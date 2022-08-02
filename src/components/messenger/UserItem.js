import { Col, Skeleton } from 'antd';
import {
  LastMessageStyled, UserAvatarStyled, UserDescriptionWrapperStyled, UserItemStyled, UserNameStyled,
} from 'components/messenger/Messenger.styled';

const UserItem = () => (
  <Skeleton loading={false} avatar>
    <UserItemStyled>
      <Col>
        <UserAvatarStyled src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" />
      </Col>
      <UserDescriptionWrapperStyled>
        <UserNameStyled>Louis CK</UserNameStyled>
        <LastMessageStyled>I was wondering...</LastMessageStyled>
      </UserDescriptionWrapperStyled>
      <Col>
        <LastMessageStyled>2:09 PM</LastMessageStyled>
      </Col>
    </UserItemStyled>
  </Skeleton>
);

export default UserItem;
