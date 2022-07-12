import { Col, Row } from 'antd';
import Users from '../containers/user/UserReport';
import { Filters } from '../components/user/Filters';

function UserReport() {
  return (
    <Row justify="center">
      <Col>
        <Filters />
        <Users />
      </Col>
    </Row>
  );
}

export default UserReport;
