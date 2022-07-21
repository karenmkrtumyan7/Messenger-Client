import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { VerifyResult } from 'components/auth/VerifyResult';
import { SpinStyled } from 'components/styledComponents/Spin/Spin.styled';

const Verify = (props) => {
  const { message, verifyRequest } = props;
  const { id } = useParams();

  useEffect(() => {
    verifyRequest(id);
  }, [verifyRequest, id]);

  return !message ? <SpinStyled /> : <VerifyResult message={message} />;
};

Verify.propTypes = {
  message: PropTypes.string,
  verifyRequest: PropTypes.func,
};

Verify.defaultProps = {
  message: '',
  verifyRequest: null,
};

export { Verify };
