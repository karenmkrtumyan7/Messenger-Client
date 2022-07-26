import UserInfo from 'containers/user/UserInfo';
import { Tabs } from 'antd';
import { User } from 'components/user/User';
import { connect } from 'react-redux';
import { selectPermissions } from 'selectors/Auth.selectors';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { UserTabsStyled } from 'components/user/User.styled';

const { TabPane } = Tabs;

const UserDetails = (props) => {
  const { permissions } = props;
  const [currentTab, setCurrentTab] = useState('users');

  const onChange = (key) => {
    setCurrentTab(key);
  };

  return (
    <div>
      <UserInfo />
      <UserTabsStyled tabPosition="left" onChange={onChange}>
        <TabPane tab="User Management" key="users">
          <User resourcePermissions={permissions[currentTab]} />
        </TabPane>
      </UserTabsStyled>
    </div>
  );
};

UserDetails.propTypes = {
  permissions: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  permissions: selectPermissions(auth),
});

export default connect(mapStateToProps)(UserDetails);
