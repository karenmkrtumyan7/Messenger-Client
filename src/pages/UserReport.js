import { Col, Row } from 'antd';
import Users from '../containers/user/UserReport';

function UserReport() {
  return (
    <Row justify="center">
      <Col>
        <Users />
      </Col>
    </Row>
  );
}

export default UserReport;
