import { Badge, Col, Skeleton } from 'antd';
import {
  LastMessageStyled, LastMessageTimeStyled, UserAvatarStyled, UserDescriptionWrapperStyled, UserItemStyled, UserNameStyled,
} from 'components/messenger/Messenger.styled';
import PropTypes from 'prop-types';
import user from 'assets/user.png';
import { getIsoHours } from 'utils';

const UserItem = (props) => {
  const {
    avatar, userName, date, text,
  } = props.data;
  const { active, onClick, count } = props;
  return (
    <Skeleton loading={false} avatar>
      <UserItemStyled active={active ? 1 : 0} onClick={onClick}>
        <Col>
          <Badge count={count}>
            <UserAvatarStyled src={avatar || user} />
          </Badge>
        </Col>
        <UserDescriptionWrapperStyled>
          <UserNameStyled>{ userName }</UserNameStyled>
          <LastMessageStyled>{ text }</LastMessageStyled>
        </UserDescriptionWrapperStyled>
        <Col>
          { date && <LastMessageTimeStyled>{ getIsoHours(date) }</LastMessageTimeStyled> }
        </Col>
      </UserItemStyled>
    </Skeleton>
  );
};

UserItem.propTypes = {
  data: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  count: PropTypes.number.isRequired,
};

UserItem.defaultProps = {
  onClick: null,
};

export default UserItem;
