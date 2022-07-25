import { Button, Row } from 'antd';
import PropTypes from 'prop-types';

export const ViewPermissions = (props) => {
  const { resourcePermissions } = props;
  const designPermissions = Object.entries(resourcePermissions);

  return (
    <Row>
      {
        designPermissions.map((permArr) => (
          <Button key={permArr[0]}>{ permArr[0] }</Button>))
      }
    </Row>
  );
};

ViewPermissions.propTypes = {
  resourcePermissions: PropTypes.object,
};

ViewPermissions.defaultProps = {
  resourcePermissions: {},
};
