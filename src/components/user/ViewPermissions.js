import { Button, Row } from 'antd';
import PropTypes from 'prop-types';
import _ from 'lodash';

export const ViewPermissions = (props) => {
  const { resourcePermissions } = props;
  const formatPermissions = Object.keys(resourcePermissions);

  return (
    !_.isEmpty(formatPermissions) && (
      <Row>
        {
          formatPermissions.map((permissions) => (
            <Button key={permissions}>{ permissions }</Button>))
        }
      </Row>
    )
  );
};

ViewPermissions.propTypes = {
  resourcePermissions: PropTypes.object,
};

ViewPermissions.defaultProps = {
  resourcePermissions: {},
};
