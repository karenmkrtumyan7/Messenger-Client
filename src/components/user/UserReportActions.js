import { Button, Popconfirm, Row } from 'antd';
import { EyeOutlined, UserDeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import UserEditModal from 'containers/user/UserEditModal';
import { UserReportActionsStyled } from 'components/user/User.styled';

const UserReportActions = (props) => {
  const {
    data, deleteUser, usersPermissions, currentUserId,
  } = props;
  const { VIEW, EDIT, DELETE: REMOVE } = usersPermissions;
  const EDITCondition = data._id === currentUserId || EDIT;

  const confirm = () => {
    deleteUser(data._id);
  };

  return (
    <Row justify="center">
      <UserReportActionsStyled>
        <Button type="primary" icon={<EyeOutlined />} disabled={!VIEW} />
        <UserEditModal data={data} disabled={!EDITCondition} />
        <Popconfirm title="Sure to delete?" onConfirm={confirm} disabled={!REMOVE}>
          <Button type="primary" icon={<UserDeleteOutlined />} disabled={!REMOVE} />
        </Popconfirm>
      </UserReportActionsStyled>
    </Row>
  );
};

UserReportActions.propTypes = {
  data: PropTypes.object.isRequired,
  usersPermissions: PropTypes.object.isRequired,
  currentUserId: PropTypes.string,
  deleteUser: PropTypes.func,
};

UserReportActions.defaultProps = {
  deleteUser: null,
  currentUserId: PropTypes.string,
};

export { UserReportActions };
