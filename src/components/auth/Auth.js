import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { AuthInfo } from './AuthInfo';
import { AuthHeader } from './AuthHeader';
import { AuthWrapperStyled, ContainerStyled } from './Auth.styled';

export function Auth(props) {
  const { children } = props;

  return (
    <AuthWrapperStyled>
      <AuthHeader />
      <Row justify="center">
        <AuthInfo />
        <Col>
          <ContainerStyled>
            {children}
          </ContainerStyled>
        </Col>
      </Row>
    </AuthWrapperStyled>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};
