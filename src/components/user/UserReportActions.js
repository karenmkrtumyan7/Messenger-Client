import { Button, Row } from 'antd';
import { EyeOutlined, UserDeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { UserReportActionsStyled } from './User.styled';
import UserEditModal from './UserEditModal';

export function UserReportActions(props) {
  const { data } = props;
  return (
    <Row justify="center">
      <UserReportActionsStyled>
        <Button type="primary" icon={<EyeOutlined />} />
        <UserEditModal data={data} />
        <Button type="primary" icon={<UserDeleteOutlined />} />
      </UserReportActionsStyled>
    </Row>
  );
}

UserReportActions.propTypes = {
  data: PropTypes.object,
};

UserReportActions.defaultProps = {
  data: {},
};
