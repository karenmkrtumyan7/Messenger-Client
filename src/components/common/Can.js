import LocalStorageService from 'services/localStorage.service';
import PropTypes from 'prop-types';

const Can = (props) => {
  const {
    actionType, resource, children, fallback,
  } = props;
  const user = LocalStorageService.get('user');

  if (!user) {
    return;
  }

  if (resource[actionType]) {
    return children;
  }
  return fallback;
};

Can.propTypes = {
  actionType: PropTypes.string,
  resource: PropTypes.object,
  children: PropTypes.object,
};

Can.defaultProps = {
  actionType: '',
  resource: {},
  children: {},
};

export { Can };
