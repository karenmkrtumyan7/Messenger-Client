import { Table } from 'antd';
import { ViewPermissions } from 'components/user/ViewPermissions';
import PropTypes from 'prop-types';
import EditPermissions from 'containers/user/EditPermissions';

const UserPermissionControl = (props) => {
  const { resourcePermissions } = props;

  const columns = [
    {
      title: 'Resource',
      dataIndex: 'resource',
      key: 'resource',
    },
    {
      title: 'Permission',
      dataIndex: 'permission',
      key: 'permission',
      render: () => (<ViewPermissions resourcePermissions={resourcePermissions} />),
    },
  ];
  const data = [
    {
      key: 1,
      resource: 'Users',
    },
  ];
  const expandedRowRender = () => <EditPermissions resourcePermissions={resourcePermissions} />;

  return (
    <Table
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
      pagination={false}
    />
  );
};

UserPermissionControl.propTypes = {
  resourcePermissions: PropTypes.object,
};

UserPermissionControl.defaultProps = {
  resourcePermissions: {},
};

export { UserPermissionControl };
