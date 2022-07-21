import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { AuthWrapperStyled, ContainerStyled } from 'components/auth/Auth.styled';
import { AuthHeader } from 'components/auth/AuthHeader';
import { AuthInfo } from 'components/auth/AuthInfo';

const Auth = (props) => {
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
};

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Auth };
