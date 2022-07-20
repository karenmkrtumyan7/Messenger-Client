import { Button, Popconfirm, Row } from 'antd';
import { EyeOutlined, UserDeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import UserEditModal from 'containers/user/UserEditModal';
import { UserReportActionsStyled } from 'components/user/User.styled';

const UserReportActions = (props) => {
  const { data, deleteUser } = props;
  const confirm = () => {
    deleteUser(data._id);
  };
  return (
    <Row justify="center">
      <UserReportActionsStyled>
        <Button type="primary" icon={<EyeOutlined />} />
        <UserEditModal data={data} />
        <Popconfirm title="Sure to delete?" onConfirm={confirm}>
          <Button type="primary" icon={<UserDeleteOutlined />} />
        </Popconfirm>
      </UserReportActionsStyled>
    </Row>
  );
};

UserReportActions.propTypes = {
  data: PropTypes.object,
  deleteUser: PropTypes.func,
};

UserReportActions.defaultProps = {
  data: {},
  deleteUser: null,
};

export { UserReportActions };
