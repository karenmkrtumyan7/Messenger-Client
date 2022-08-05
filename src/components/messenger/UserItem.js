import { Col, Skeleton } from 'antd';
import {
  LastMessageStyled, LastMessageTimeStyled, UserAvatarStyled, UserDescriptionWrapperStyled, UserItemStyled, UserNameStyled,
} from 'components/messenger/Messenger.styled';
import PropTypes from 'prop-types';

const UserItem = (props) => {
  const {
    avatar, userName, lastMessageTime, lastMessage,
  } = props.data;
  const { active, onClick } = props;

  return (
    <Skeleton loading={false} avatar>
      <UserItemStyled active={active ? 1 : 0} onClick={onClick}>
        <Col>
          <UserAvatarStyled src={avatar} />
        </Col>
        <UserDescriptionWrapperStyled>
          <UserNameStyled>{ userName }</UserNameStyled>
          <LastMessageStyled>{ lastMessage }</LastMessageStyled>
        </UserDescriptionWrapperStyled>
        <Col>
          <LastMessageTimeStyled>{ lastMessageTime }</LastMessageTimeStyled>
        </Col>
      </UserItemStyled>
    </Skeleton>
  );
};

UserItem.propTypes = {
  data: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

UserItem.defaultProps = {
  onClick: null,
};

export default UserItem;
