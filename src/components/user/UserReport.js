import { Table } from 'antd';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const columns = [
  {
    title: 'Username',
    width: 100,
    dataIndex: 'username',
    key: 'username',
    fixed: 'left',
  },
  {
    title: 'Id',
    width: 100,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
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
  },
  {
    title: 'Creation Date',
    dataIndex: 'creation-date',
    key: 'creation-date',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <p>action</p>,
  },
];
const data = [];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    username: `Edrward ${i}`,
    id: i,
    email: `email${i}@gmail.com`,
    contact: `${i}123`,
    'creation-date': i,
  });
}

export function UserReport(props) {
  const { getUsers } = props;
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{
        x: 1500,
        y: 1500,
      }}
    />
  );
}

UserReport.propTypes = {
  getUsers: PropTypes.func,
};

UserReport.defaultProps = {
  getUsers: null,
};

export default UserReport;
