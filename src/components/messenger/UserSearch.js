import { SearchOutlined } from '@ant-design/icons';
import { UserSearchButtonStyled, UserSearchStyled } from 'components/messenger/Messenger.styled';

const UserSearch = () => (
  <>
    <div>
      <UserSearchStyled placeholder="Search" />
    </div>
    <UserSearchButtonStyled type="primary" icon={<SearchOutlined />} />
  </>
);

export { UserSearch };
