import { MessengerHeaderStyled, ToUserNameStyled } from 'components/messenger/Messenger.styled';
import { Skeleton } from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';

const MessengerHeader = (props) => {
  const { currentConversationUser } = props;
  const { userName } = currentConversationUser;
  return (
    <MessengerHeaderStyled>
      <div>
        {_.isEmpty(currentConversationUser)
          ? <Skeleton.Input active />
          : (
            <span>
              {'To: '}
              <ToUserNameStyled>{ userName }</ToUserNameStyled>
            </span>
          )}
      </div>
    </MessengerHeaderStyled>
  );
};

export { MessengerHeader };

MessengerHeader.propTypes = {
  currentConversationUser: PropTypes.object.isRequired,
};
