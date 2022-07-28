import LocalStorageService from 'services/localStorage.service';
import React from 'react';
import PropTypes from 'prop-types';
import { ui } from 'constants/accessControl';

const Can = (props) => {
  const {
    actionType, resource, children, visibility,
  } = props;
  const user = LocalStorageService.get('user');

  if (!user) {
    return;
  }

  if (resource[actionType]) {
    return children;
  }
  if (visibility === ui.disabled) {
    return React.cloneElement(children, { disabled: true });
  }
  if (visibility === ui.notVisible) {
    return null;
  }
};

Can.propTypes = {
  actionType: PropTypes.string,
  resource: PropTypes.object,
  children: PropTypes.object,
  visibility: PropTypes.string,
};

Can.defaultProps = {
  actionType: '',
  resource: {},
  children: {},
  visibility: ui.notVisible,
};

export { Can };
