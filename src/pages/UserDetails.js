import UserInfo from 'containers/user/UserInfo';
import { Tabs } from 'antd';
import { UserPermissionControl } from 'components/user/User';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { UserTabsStyled } from 'components/user/User.styled';
import { bindActionCreators } from 'redux';
import { getPermissionsRequest } from 'actions/user/UserActionCreator';
import { selectUserResources } from 'selectors/Users.selectors';
import { resource } from 'constants/accessControl';
import { useParams } from 'react-router-dom';

const { TabPane } = Tabs;

const UserDetails = (props) => {
  const { resources, getResources } = props;
  const [selectedResource, setSelectedResource] = useState(resource.users);
  const { id } = useParams();

  useEffect(() => {
    getResources(id);
  }, []);

  return (
    <div>
      <UserInfo />
      <UserTabsStyled
        tabPosition="left"
        onChange={(key) => setSelectedResource(key)}
      >
        <TabPane tab="User Management" key="users">
          <UserPermissionControl resourcePermissions={resources[selectedResource]} />
        </TabPane>
      </UserTabsStyled>
    </div>
  );
};

UserDetails.propTypes = {
  resources: PropTypes.object.isRequired,
  getResources: PropTypes.func,
};

UserDetails.defaultProps = {
  getResources: null,
};

const mapStateToProps = ({ user }) => ({
  resources: selectUserResources(user),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getResources: getPermissionsRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
