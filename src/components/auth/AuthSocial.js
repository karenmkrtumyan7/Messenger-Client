import { Col, Grid } from 'antd';
import facebookIcon from 'assets/social-networks/facebook.png';
import googleIcon from 'assets/social-networks/google.png';
import appleIcon from 'assets/social-networks/apple.png';
import {
  SocialIconMidStyled, SocialIconStyled, SocialAuthTxtStyled, SocialIconsWrapperStyled,
} from './Auth.styled';

export function AuthSocial() {
  const { useBreakpoint } = Grid;
  const { lg } = useBreakpoint();
  return (
    <Col>
      <SocialAuthTxtStyled>or continue with</SocialAuthTxtStyled>
      <SocialIconsWrapperStyled large={lg ? 1 : 0} justify="center">
        <SocialIconStyled alt="facebook icon" src={facebookIcon} />
        <SocialIconMidStyled alt="google icon" src={googleIcon} />
        <SocialIconStyled alt="social icon" src={appleIcon} />
      </SocialIconsWrapperStyled>
    </Col>
  );
}
