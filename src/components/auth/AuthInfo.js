import { Col, Grid } from 'antd';
import { useLocation } from 'react-router-dom';
import saly from 'assets/saly.png';
import {
  AuthHeadingStyled, AuthInfoStyled, AuthInfoWrapperStyled, AuthLoremStyled, AuthRedirectTxtStyled, AuthRedirectUrlStyled,
} from './Auth.styled';

export function AuthInfo() {
  const { pathname } = useLocation();
  const RedirectTxt = pathname === '/signin' ? 'Register here !' : 'Login here !';
  const RedirectLink = pathname === '/signin' ? '/signup' : '/signin';
  const { useBreakpoint } = Grid;
  const { lg, md } = useBreakpoint();
  return (
    <Col span={lg ? 12 : 24}>
      <AuthInfoWrapperStyled mid={md ? 1 : 0} large={lg ? 1 : 0}>
        <AuthInfoStyled lg={12}>
          <AuthHeadingStyled level={1}>Sign in to</AuthHeadingStyled>
          <AuthLoremStyled>Lorem Ipsum is simply</AuthLoremStyled>
          <AuthRedirectTxtStyled>If you don’t have an account register</AuthRedirectTxtStyled>
          <AuthRedirectTxtStyled>
            You can
            {' '}
            <AuthRedirectUrlStyled to={RedirectLink}>{RedirectTxt}</AuthRedirectUrlStyled>
          </AuthRedirectTxtStyled>
        </AuthInfoStyled>
        <Col span={lg ? 12 : 0}>
          <img src={saly} alt="saly" />
        </Col>
      </AuthInfoWrapperStyled>
    </Col>
  );
}
