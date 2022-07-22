import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SubMenu from 'antd/es/menu/SubMenu';

const { Content, Sider } = Layout;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BaseLayout = (props) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Layout className="site-layout">
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="account" icon={<UserOutlined />}>
              <Link to="/">Account</Link>
            </Menu.Item>
            <SubMenu key="User Management" icon={<UserSwitchOutlined />} title="User Management">
              <Menu.Item key="users">
                <Link key="users" to="/users">Users</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '10px 18px' }}>
          <StyledLayout>
            { children }
          </StyledLayout>
        </Content>
      </Layout>
    </Layout>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.object,
};

BaseLayout.defaultProps = {
  children: {},
};

export { BaseLayout };
