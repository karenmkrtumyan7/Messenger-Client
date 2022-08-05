import UserItem from 'components/messenger/UserItem';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const MessengerMembers = (props) => {
  const {
    members, getMembers, currentConversationUser, setCurrentConversationUser,
  } = props;

  useEffect(() => {
    getMembers();
  }, [getMembers]);

  return (
    <>
      {
        members.map((member) => (
          <UserItem
            key={member._id}
            data={member}
            active={currentConversationUser._id === member._id}
            onClick={() => setCurrentConversationUser(member)}
          />
        ))
      }
    </>
  );
};

MessengerMembers.propTypes = {
  members: PropTypes.array,
  getMembers: PropTypes.func,
  currentConversationUser: PropTypes.object,
  setCurrentConversationUser: PropTypes.func,
};

MessengerMembers.defaultProps = {
  members: [],
  getMembers: null,
  currentConversationUser: {},
  setCurrentConversationUser: null,
};

export { MessengerMembers };
