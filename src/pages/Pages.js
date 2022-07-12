import { notification } from 'antd';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SpinStyled } from '../components/auth/Auth.styled';

export function Pages(props) {
  const {
    page, messages, resetFailure, isLoading,
  } = props;

  useEffect(() => {
    if (messages.length) {
      messages.forEach((message) => {
        notification.error({
          description: message,
          placement: 'bottomLeft',
          duration: 3,
        });
      }, [messages]);
      resetFailure();
    }

    return () => {
      if (!messages.length) {
        notification.destroy();
      }
    };
  });

  return (
    <>
      { page }
      { isLoading && <SpinStyled /> }
    </>
  );
}

Pages.propTypes = {
  page: PropTypes.element,
  messages: PropTypes.array,
  resetFailure: PropTypes.func,
  isLoading: PropTypes.bool,
};

Pages.defaultProps = {
  page: null,
  messages: [],
  resetFailure: null,
  isLoading: false,
};
