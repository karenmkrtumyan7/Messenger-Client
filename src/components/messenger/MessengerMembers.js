import UserItem from 'components/messenger/UserItem';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { NavigationService } from 'services/navigationService';
import { useParams } from 'react-router-dom';

const MessengerMembers = (props) => {
  const { id: paramsId } = useParams();
  const {
    members, getMembers, currentConversationUser, setCurrentConversationUser, id, membersFiltered, setMembersFiltered,
  } = props;

  useEffect(() => {
    getMembers(id);
  }, [getMembers, id]);

  useEffect(() => {
    setMembersFiltered(members);
  }, [members, setMembersFiltered]);

  useEffect(() => {
    if (!_.isEmpty(members) && _.isEmpty(currentConversationUser)) {
      if (members[0].userName !== currentConversationUser.userName) {
        if (paramsId) {
          setCurrentConversationUser(members.find((member) => member._id === paramsId));
        } else {
          setCurrentConversationUser(members[0]);
        }
      }
    }
  }, [members, setCurrentConversationUser, currentConversationUser.userName, paramsId, currentConversationUser]);

  return (
    <>
      {
        membersFiltered.map((member) => (
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
  id: PropTypes.string.isRequired,
  membersFiltered: PropTypes.array.isRequired,
  setMembersFiltered: PropTypes.func.isRequired,
};

MessengerMembers.defaultProps = {
  members: [],
  getMembers: null,
  currentConversationUser: {},
  setCurrentConversationUser: null,
};

export { MessengerMembers };
