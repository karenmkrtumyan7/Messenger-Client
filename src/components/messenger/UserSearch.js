import { SearchOutlined } from '@ant-design/icons';
import { UserSearchButtonStyled, UserSearchStyled, UserSearchWrapperStyled } from 'components/messenger/Messenger.styled';
import _ from 'lodash';
import { Form } from 'antd';
import { FormItemStyled } from 'Global.styled';
import PropTypes from 'prop-types';

const UserSearch = (props) => {
  const { setMembersFiltered, members } = props;

  const userSearchSubmitHandler = ({ searchText }) => {
    if (_.isEmpty(searchText)) {
      setMembersFiltered(members);
    }
    setMembersFiltered((prevMembersFiltered) => (
      prevMembersFiltered.filter((member) => member.userName.includes(searchText))
    ));
  };

  return (
    <Form onFinish={userSearchSubmitHandler}>
      <UserSearchWrapperStyled>
        <FormItemStyled name="searchText">
          <UserSearchStyled
            placeholder="Search"
          />
        </FormItemStyled>
        <FormItemStyled>
          <UserSearchButtonStyled
            type="primary"
            htmlType="submit"
            icon={<SearchOutlined />}
          />
        </FormItemStyled>
      </UserSearchWrapperStyled>
    </Form>
  );
};

UserSearch.propTypes = {
  setMembersFiltered: PropTypes.func.isRequired,
  members: PropTypes.array.isRequired,
};

export { UserSearch };
