import UserItem from 'components/messenger/UserItem';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { NavigationService } from 'services/navigationService';

const MessengerMembers = (props) => {
  const {
    members, getMembers, currentConversationUser, setCurrentConversationUser, id,
  } = props;

  useEffect(() => {
    getMembers(id);
  }, [getMembers]);

  useEffect(() => {
    if (!_.isEmpty(members)) setCurrentConversationUser(members[0]);
  }, [members]);

  return (
    <>
      {
        members.map((member) => (
          <UserItem
            key={member._id}
            data={member}
            active={currentConversationUser._id === member._id}
            onClick={() => {
              setCurrentConversationUser(member);
              NavigationService(member._id);
            }}
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
