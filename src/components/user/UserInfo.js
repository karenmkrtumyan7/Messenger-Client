import {
  Card, Col,
} from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFormattedDate } from 'utils';
import { UserInfoStyled } from 'components/user/User.styled';

const UserInfo = (props) => {
  const { getUser, user } = props;
  const { id } = useParams();
  const {
    userName, email, contact, verified, role, createdAt,
  } = user;

  useEffect(() => {
    getUser(id);
  }, [getUser, id]);

  return (
    <UserInfoStyled gutter={8}>
      <Col span={8}>
        <Card title="Username" bordered={false} size="small">
          { userName }
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Email" bordered={false} size="small">
          { email }
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Contact" bordered={false} size="small">
          { contact }
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Verified" bordered={false} size="small">
          { verified ? 'Verified' : 'Not verified' }
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Creation Date" bordered={false} size="small">
          { getFormattedDate(createdAt) }
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Role" bordered={false} size="small">
          { role }
        </Card>
      </Col>
    </UserInfoStyled>
  );
};

UserInfo.propTypes = {
  getUser: PropTypes.func,
  user: PropTypes.object.isRequired,
};

UserInfo.defaultProps = {
  getUser: null,
};

export { UserInfo };
