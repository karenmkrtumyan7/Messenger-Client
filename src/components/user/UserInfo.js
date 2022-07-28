import {
  Card, Col,
} from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFormattedDate } from 'utils';
import { UserInfoStyled } from 'components/user/User.styled';
import _ from 'lodash';

const UserInfo = (props) => {
  const { getUser, user } = props;
  const formatUser = {
    ...user,
    createdAt: getFormattedDate(user.createdAt),
    verified: user.verified ? 'Verified' : 'Not Verified',
  };
  const userDetails = Object.entries(formatUser);
  const { id } = useParams();

  useEffect(() => {
    getUser(id);
  }, [getUser, id]);

  return (
    user && (
      <UserInfoStyled gutter={8}>
        {
          userDetails.map(([name, detail]) => (
            <Col span={8} key={name}>
              <Card title={_.upperCase(name)} bordered={false} size="small">
                {detail}
              </Card>
            </Col>
          ))
        }
      </UserInfoStyled>
    )
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
