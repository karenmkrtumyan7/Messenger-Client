import { Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { UserSearchButtonStyled, UserSearchStyled } from 'components/messenger/Messenger.styled';

const UserSearch = () => (
  <Row>
    <div>
      <UserSearchStyled placeholder="Search" />
    </div>
    <UserSearchButtonStyled type="primary" icon={<SearchOutlined />} />
  </Row>
);

export { UserSearch };
