import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UserReportActions } from './UserReportActions';
import { UsersTableStyled } from './User.styled';

export function UserReport(props) {
  const {
    count, users, getUsers, loading,
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
      dataIndex: 'username',
      key: 'username',
      fixed: 'left',
      ellipsis: true,
    },
    {
      title: 'Id',
      width: 150,
      dataIndex: 'id',
      key: 'id',
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
      dataIndex: 'creation-date',
      key: 'creation-date',
      width: 150,
      sorter: {
        compare: (a, b) => (new Date(a.username) > new Date(b.username) ? 1 : -1),
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
    setPagination({ ...pagination, total: count });
  }, [count]);

  const handleTableChange = ({ current, pageSize }) => {
    setPagination({ ...pagination, current });
    getUsers(current, pageSize);
  };

  return (
    <UsersTableStyled
      columns={columns}
      dataSource={users}
      scroll={{ x: 100, y: 700 }}
      pagination={pagination}
      onChange={handleTableChange}
      loading={loading}
    />
  );
}

UserReport.propTypes = {
  count: PropTypes.number,
  users: PropTypes.array,
  getUsers: PropTypes.func,
  loading: PropTypes.bool,
};

UserReport.defaultProps = {
  count: 0,
  users: [],
  getUsers: null,
  loading: false,
};
