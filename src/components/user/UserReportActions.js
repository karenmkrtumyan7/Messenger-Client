import { Button, Popconfirm, Row } from 'antd';
import { EyeOutlined, UserDeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { UserReportActionsStyled } from './User.styled';
import UserEditModal from '../../containers/user/UserEditModal';

export function UserReportActions(props) {
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
}

UserReportActions.propTypes = {
  data: PropTypes.object,
  deleteUser: PropTypes.func,
};

UserReportActions.defaultProps = {
  data: {},
  deleteUser: null,
};
