import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import socket from 'services/socket';
import { MessengerActionTypes } from 'actions/messenger/MessengerActionTypes';
import PropTypes from 'prop-types';

const MessageActions = (props) => {
  const { message } = props;
  return (
    <div>
      <Button
        icon={<DeleteOutlined />}
        onClick={() => socket.emit(MessengerActionTypes.CONVERSATION_MESSAGE_DELETE, message)}
      />
    </div>
  );
};

MessageActions.propTypes = {
  message: PropTypes.object.isRequired,
};

export { MessageActions };
