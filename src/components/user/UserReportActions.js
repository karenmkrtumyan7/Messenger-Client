import { Button, Popconfirm, Row } from 'antd';
import { EyeOutlined, UserDeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import UserEditModal from 'containers/user/UserEditModal';
import { UserReportActionsStyled } from 'components/user/User.styled';

const UserReportActions = (props) => {
  const {
    data, deleteUser, usersPermissions, currentUserId, isAdmin,
  } = props;
  const { view, edit, delete: remove } = usersPermissions;

  const viewCondition = isAdmin || view;
  const editCondition = isAdmin || data._id === currentUserId || edit;
  const removeCondition = isAdmin || remove;

  const confirm = () => {
    deleteUser(data._id);
  };

  return (
    <Row justify="center">
      <UserReportActionsStyled>
        { viewCondition && <Button type="primary" icon={<EyeOutlined />} /> }
        { editCondition && <UserEditModal data={data} /> }
        { removeCondition && (
          <Popconfirm title="Sure to delete?" onConfirm={confirm}>
            <Button type="primary" icon={<UserDeleteOutlined />} />
          </Popconfirm>
        )}
      </UserReportActionsStyled>
    </Row>
  );
};

UserReportActions.propTypes = {
  data: PropTypes.object.isRequired,
  usersPermissions: PropTypes.object.isRequired,
  currentUserId: PropTypes.string,
  deleteUser: PropTypes.func,
  isAdmin: PropTypes.bool,
};

UserReportActions.defaultProps = {
  deleteUser: null,
  isAdmin: false,
  currentUserId: PropTypes.string,
};

export { UserReportActions };
