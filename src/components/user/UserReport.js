import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserReportActions from '../../containers/user/UserReportActions';
import { UsersTableStyled } from './User.styled';

export function UserReport(props) {
  const {
    count, data, getUsers, loading, change, resetChange,
  } = props;

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 4,
    total: count,
  });

  const columns = [
    {
      title: 'Username',
      width: 100,
      dataIndex: 'userName',
      key: 'userName',
      fixed: 'left',
      ellipsis: true,
    },
    {
      title: 'Id',
      width: 150,
      dataIndex: '_id',
      key: '_id',
      ellipsis: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 150,
    },
    {
      title: 'Contact number',
      dataIndex: 'contact',
      key: 'contact',
      width: 150,
      ellipsis: true,
    },
    {
      title: 'Creation Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 150,
      sorter: {
        compare: (a, b) => (new Date(a.userName) > new Date(b.userName) ? 1 : -1),
        multiple: 2,
      },
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 120,
      render: (_, record) => (
        <UserReportActions data={record} />
      )
      ,
    },
  ];

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    if (change) {
      resetChange();
      getUsers();
    }
  }, [getUsers, change, resetChange]);

  useEffect(() => {
    setPagination({ ...pagination, total: count });
  }, [count, pagination]);

  const handleTableChange = ({ current, pageSize }) => {
    setPagination({ ...pagination, current });
    getUsers(current, pageSize);
  };

  return (
    <UsersTableStyled
      columns={columns}
      dataSource={data}
      scroll={{ x: 100, y: 700 }}
      pagination={pagination}
      onChange={handleTableChange}
      loading={loading}
    />
  );
}

UserReport.propTypes = {
  count: PropTypes.number,
  data: PropTypes.array,
  getUsers: PropTypes.func,
  loading: PropTypes.bool,
  change: PropTypes.bool,
  resetChange: PropTypes.func,
};

UserReport.defaultProps = {
  count: 0,
  data: [],
  getUsers: null,
  loading: false,
  change: false,
  resetChange: null,
};
