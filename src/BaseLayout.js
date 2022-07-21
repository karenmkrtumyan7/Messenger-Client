import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('User Management', 'sub1', <UserOutlined />, [
    getItem('Users', 'users'),
  ]),
];

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
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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
