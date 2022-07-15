import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserReportActions from 'containers/user/UserReportActions';
import { UsersTableStyled } from './User.styled';

export function UserReport(props) {
  const {
    count, data, getUsers, loading, change, resetChange,
  } = props;

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: count,
  });

  const columns = [
    {
      title: 'Username',
      width: 100,
      dataIndex: 'userName',
      key: 'userName',
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
    getUsers({ page: 1, limit: 10 });
  }, [getUsers]);

  useEffect(() => {
    if (change) {
      const { current, pageSize } = pagination;
      resetChange();
      getUsers({ page: current, limit: pageSize });
    }
  }, [getUsers, change, resetChange, pagination]);

  useEffect(() => {
    if (pagination.total !== count) {
      setPagination({ ...pagination, total: count });
    }
  }, [count, pagination]);

  const handleTableChange = ({ current, pageSize, total }) => {
    setPagination({ current, pageSize, total });
    getUsers({ page: current, limit: pageSize });
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
