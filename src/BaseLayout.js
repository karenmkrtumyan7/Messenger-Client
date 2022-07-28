import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SubMenu from 'antd/es/menu/SubMenu';
import { selectAuthUserResources } from 'selectors/Auth.selectors';
import { connect } from 'react-redux';
import { Can } from 'components/common/Can';
import { resource, types } from 'constants/accessControl';

const { Content, Sider } = Layout;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BaseLayout = (props) => {
  const { children, resources } = props;
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
            <Can actionType={types.view} resource={resources[resource.users]}>
              <SubMenu key="User Management" icon={<UserSwitchOutlined />} title="User Management">
                <Menu.Item key="users">
                  <Link key="users" to="/users/">Users</Link>
                </Menu.Item>
              </SubMenu>
            </Can>
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
  resources: PropTypes.object.isRequired,
};

BaseLayout.defaultProps = {
  children: {},
};

const mapStateToProps = ({ auth }) => ({
  resources: selectAuthUserResources(auth),
});

export default connect(mapStateToProps)(BaseLayout);
