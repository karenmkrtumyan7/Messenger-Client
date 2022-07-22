import { Table } from 'antd';

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
  },
];
const data = [
  {
    key: 1,
    resource: 'User Management',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
];

const EditPermissions = () => (
  <Table
    columns={columns}
    // expandable={{
    //   expandedRowRender: (record) => (
    //     <p
    //       style={{
    //         margin: 0,
    //       }}
    //     >
    //       {record.description}
    //     </p>
    //   ),
    //   rowExpandable: (record) => record.name !== 'Not Expandable',
    // }}
    dataSource={data}
  />
);

export { EditPermissions };
