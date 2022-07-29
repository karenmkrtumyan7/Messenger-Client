import { LogoutOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { selectAuthUserResources } from 'selectors/Auth.selectors';
import { connect } from 'react-redux';
import { Can } from 'components/common/Can';
import { resource, types } from 'constants/accessControl';
import _ from 'lodash';
import { NavigationService } from 'services/navigationService';
import { ContentStyled, LayoutStyled, LayoutWrapperStyled } from 'layouts/layouts.styled';
import LocalStorageService from 'services/localStorage.service';

const { Sider } = Layout;

const BaseLayout = (props) => {
  const { children, resources } = props;
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      label: 'Account',
      key: 'Account',
      icon: <UserOutlined />,
      onClick: () => NavigationService('/'),
      hide: false,
    },
    {
      label: 'Users',
      key: 'Users',
      icon: <UserSwitchOutlined />,
      onClick: () => NavigationService('/users/'),
      hide: Can({ actionType: types.view, resource: resources[resource.users], fallback: true }),
    },
    {
      label: 'Sign out',
      key: 'Sign out',
      icon: <LogoutOutlined />,
      onClick: () => {
        LocalStorageService.clear();
        window.location.href = '/signin';
      },
      hide: false,
    },
  ];

  const displayMenuItems = menuItems.reduce((acc, item) => {
    if (!item.hide) acc.push(_.omit(item, ['hide']));
    return acc;
  }, []);

  return (
    <LayoutWrapperStyled>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu theme="dark" mode="inline" items={displayMenuItems} />
      </Sider>
      <ContentStyled>
        <LayoutStyled>
          { children }
        </LayoutStyled>
      </ContentStyled>
    </LayoutWrapperStyled>
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
