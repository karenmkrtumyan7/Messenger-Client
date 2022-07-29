import { Button, Popconfirm, Row } from 'antd';
import { LockOutlined, UserDeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import UserEditModal from 'containers/user/UserEditModal';
import { UserReportActionsStyled } from 'components/user/User.styled';
import { Can } from 'components/common/Can';
import { types, resource } from 'constants/accessControl';
import { NavigationService } from 'services/navigationService';

const UserReportActions = (props) => {
  const {
    data, deleteUser, resources, currentUserId,
  } = props;
  const EditByOwnerCondition = data._id === currentUserId;

  return (
    <Row justify="center">
      <UserReportActionsStyled>
        <Can actionType={types.manage} resource={resources[resource.users]}>
          <Button
            type="primary"
            icon={<LockOutlined />}
            onClick={() => NavigationService(`${data._id}`)}
          />
        </Can>

        {EditByOwnerCondition
          ? (
            <Can actionType={types.editOwn} resource={resources[resource.users]}>
              <UserEditModal data={data} />
            </Can>
          )
          : (
            <Can actionType={types.edit} resource={resources[resource.users]}>
              <UserEditModal data={data} />
            </Can>
          )}
        <Can actionType={types.delete} resource={resources[resource.users]}>
          <Popconfirm title="Sure to delete?" onConfirm={() => deleteUser(data._id)}>
            <Button type="primary" icon={<UserDeleteOutlined />} />
          </Popconfirm>
        </Can>
      </UserReportActionsStyled>
    </Row>
  );
};

UserReportActions.propTypes = {
  data: PropTypes.object.isRequired,
  resources: PropTypes.object.isRequired,
  currentUserId: PropTypes.string,
  deleteUser: PropTypes.func,
};

UserReportActions.defaultProps = {
  deleteUser: null,
  currentUserId: PropTypes.string,
};

export { UserReportActions };
