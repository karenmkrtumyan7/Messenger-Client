import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { VerifyResult } from './VerifyResult';
import { Spin } from '../settings/Spin';

export function Verify(props) {
  const { message, verifyRequest } = props;
  const { id } = useParams();

  useEffect(() => {
    verifyRequest(id);
  }, [verifyRequest, id]);

  return !message ? <Spin /> : <VerifyResult message={message} />;
}

Verify.propTypes = {
  message: PropTypes.string,
  verifyRequest: PropTypes.func,
};

Verify.defaultProps = {
  message: '',
  verifyRequest: null,
};
