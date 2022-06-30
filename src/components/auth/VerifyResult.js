import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function VerifyResult(props) {
  const { message } = props;
  return (
    <Result
      title={message}
      extra={[
        <Button type="primary" key="console">
          <Link to="/signin">Sign In</Link>
        </Button>,
      ]}
    />
  );
}

VerifyResult.propTypes = {
  message: PropTypes.string,
};

VerifyResult.defaultProps = {
  message: '',
};
