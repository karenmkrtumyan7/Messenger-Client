import {
  Card, Col, Row,
} from 'antd';
import styled from 'styled-components';

const UserInfoStyled = styled(Row)`
  row-gap: 10px;
`;

const UserInfo = () => (
  <UserInfoStyled gutter={8}>
    <Col span={8}>
      <Card title="Username" bordered={false} size="small">
        content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Email" bordered={false} size="small">
        content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Contact" bordered={false} size="small">
        content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Verified" bordered={false} size="small">
        content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Creation Date" bordered={false} size="small">
        content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Role" bordered={false} size="small">
        content
      </Card>
    </Col>
  </UserInfoStyled>
);

export { UserInfo };
