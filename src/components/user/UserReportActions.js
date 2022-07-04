import { Button, Row } from 'antd';
import { EditOutlined, EyeOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { UserReportActionsStyled } from './User.styled';

export function UserReportActions() {
  return (
    <Row justify="center">
      <UserReportActionsStyled>
        <Button type="primary" icon={<EyeOutlined />} />
        <Button type="primary" icon={<EditOutlined />} />
        <Button type="primary" icon={<UserDeleteOutlined />} />
      </UserReportActionsStyled>
    </Row>
  );
}
