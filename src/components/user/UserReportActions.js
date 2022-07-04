import { Button } from 'antd';
import { EditOutlined, EyeOutlined, UserDeleteOutlined } from '@ant-design/icons';

export function UserReportActions() {
  return (
    <>
      <Button type="primary" icon={<EyeOutlined />} />
      <Button type="primary" icon={<EditOutlined />} />
      <Button type="primary" icon={<UserDeleteOutlined />} />
    </>
  );
}
