import { UserInfo } from 'components/user/UserInfo';

import { Tabs } from 'antd';
import { EditPermissions } from 'components/user/EditPermissions';

const { TabPane } = Tabs;

const UserDetails = () => (
  <div>
    <UserInfo />
    <Tabs tabPosition="left">
      <TabPane tab="User Management" key="1">
        <EditPermissions />
      </TabPane>
    </Tabs>
  </div>
);

export { UserDetails };
