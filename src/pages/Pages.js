import { notification } from 'antd';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SpinStyled } from 'components/styledComponents/Spin/Spin.styled';

const Pages = (props) => {
  const {
    page, errorMessage, resetFailure, isLoading, successMessage, resetSuccess,
  } = props;

  useEffect(() => {
    if (errorMessage) {
      notification.error({
        description: errorMessage,
        placement: 'bottomLeft',
        duration: 2,
        onClose: resetFailure,
      }, [errorMessage]);
    }

    return () => {
      if (!errorMessage.length) {
        notification.destroy();
      }
    };
  }, [errorMessage, resetFailure]);

  useEffect(() => {
    if (successMessage) {
      notification.success({
        description: successMessage,
        placement: 'bottomLeft',
        duration: 2,
        onClose: resetSuccess,
      });
    }
  }, [successMessage, resetSuccess]);

  return (
    <>
      { page }
      { isLoading && <SpinStyled /> }
    </>
  );
};

Pages.propTypes = {
  page: PropTypes.element,
  errorMessage: PropTypes.string,
  resetFailure: PropTypes.func,
  isLoading: PropTypes.bool,
  successMessage: PropTypes.string,
  resetSuccess: PropTypes.func,
};

Pages.defaultProps = {
  page: null,
  errorMessage: '',
  resetFailure: null,
  isLoading: false,
  successMessage: '',
  resetSuccess: null,
};

export { Pages };
