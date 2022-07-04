// import { SearchOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserReportActions } from './UserReportActions';
import { UsersTableStyled } from './User.styled';
// import Highlighter from 'react-highlight-words';

export function UserReport(props) {
  const { users, getUsers } = props;
  // const [searchText, setSearchText] = useState('');
  // const [searchedColumn, setSearchedColumn] = useState('');
  // const searchInput = useRef(null);
  //
  // const handleSearch = (selectedKeys, confirm, dataIndex) => {
  //   confirm();
  //   setSearchText(selectedKeys[0]);
  //   setSearchedColumn(dataIndex);
  // };
  //
  // const handleReset = (clearFilters) => {
  //   clearFilters();
  //   setSearchText('');
  // };

  // const getColumnSearchProps = (dataIndex) => ({
  //   filterDropdown: ({
  //     setSelectedKeys, selectedKeys, confirm, clearFilters,
  //   }) => (
  //     <div
  //       style={{
  //         padding: 8,
  //       }}
  //     >
  //       <Input
  //         ref={searchInput}
  //         placeholder={`Search ${dataIndex}`}
  //         value={selectedKeys[0]}
  //         onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
  //         onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         style={{
  //           marginBottom: 8,
  //           display: 'block',
  //         }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Search
  //         </Button>
  //         <Button
  //           onClick={() => clearFilters && handleReset(clearFilters)}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Reset
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             confirm({
  //               closeDropdown: false,
  //             });
  //             setSearchText(selectedKeys[0]);
  //             setSearchedColumn(dataIndex);
  //           }}
  //         >
  //           Filter
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: (filtered) => (
  //     <SearchOutlined
  //       style={{
  //         color: filtered ? '#1890ff' : undefined,
  //       }}
  //     />
  //   ),
  //   onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  //   onFilterDropdownVisibleChange: (visible) => {
  //     if (visible) {
  //       setTimeout(() => searchInput.current?.select(), 100);
  //     }
  //   },
  //   render: (text) => (searchedColumn === dataIndex ? (
  //     <Highlighter
  //       highlightStyle={{
  //         backgroundColor: '#ffc069',
  //         padding: 0,
  //       }}
  //       searchWords={[searchText]}
  //       autoEscape
  //       textToHighlight={text ? text.toString() : ''}
  //     />
  //   ) : (
  //     text
  //   )),
  // });

  const columns = [
    {
      title: 'Username',
      width: 100,
      dataIndex: 'username',
      key: 'username',
      fixed: 'left',
      // ...getColumnSearchProps('username'),
    },
    {
      title: 'Id',
      width: 150,
      dataIndex: 'id',
      key: 'id',
      // ...getColumnSearchProps('id'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 150,
      // ...getColumnSearchProps('email'),
    },
    {
      title: 'Contact number',
      dataIndex: 'contact',
      key: 'contact',
      width: 150,
      // ...getColumnSearchProps('contact'),
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
        <UserReportActions record={record} />
      )
      ,
    },
  ];

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <UsersTableStyled
      columns={columns}
      dataSource={users}
      scroll={{ x: 100, y: 700 }}
    />
  );
}

UserReport.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func,
};

UserReport.defaultProps = {
  users: [],
  getUsers: null,
};
