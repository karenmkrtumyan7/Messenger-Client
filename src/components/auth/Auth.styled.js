import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Row, Col, Typography, Input, Space,
} from 'antd';

const { Title } = Typography;

const ContainerStyled = styled(Col)`
  width: ${(props) => (props.mid ? 'default' : '370px')};
  padding: ${(props) => (props.mid ? 'default' : '0 15px')};
`;

const AuthHeaderStyled = styled(Row)`
  justify-content: ${(props) => (props.mid ? 'start' : 'center')};
  padding: ${(props) => (props.mid ? '31px 0px 25px 42px' : '31px 0px 21px 0px')};
`;

const AuthHeadingStyled = styled(Title)`
  font-style: normal;
  font-weight: 600;
  font-size: 3.5rem;
  line-height: 75px;
`;

const AuthLoremStyled = styled.p`
  font-size: 2.5rem;
  margin-bottom: 3.78rem;
`;

const AuthRedirectTxtStyled = styled.p`
  font-size: 1.14rem;
  line-height: 24px;
`;

const AuthRedirectUrlStyled = styled(Link)`
  font-size: 1.14rem;
  line-height: 24px;
  color: ${(props) => props.theme.colors.indigo};
`;

const AuthInfoWrapperStyled = styled(Row)`
  justify-content: ${(props) => (props.large ? 'default' : 'center')};
  margin-top: ${(props) => (props.large ? '7.85rem' : 0)};
`;

const AuthInfoStyled = styled(ContainerStyled)`
  padding-bottom: ${(props) => (props.large ? 'default' : '1.85rem')};
`;

const AuthTextFieldStyled = styled(Input)`
  font-size: 1.1rem;
  line-height: 22px;
  background-color: ${(props) => props.theme.colors.titanWhite} !important;
  height: 62px;
  border: 0px;
  border-radius: 8px;
  padding: 20px 19px 19px 26px;
  color: ${(props) => props.theme.colors.melrose};

  ::placeholder {
    color: ${(props) => props.theme.colors.melrose};
  };
`;

const AuthPassFieldStyled = styled(Input.Password)`
  background-color: ${(props) => props.theme.colors.titanWhite} !important;
  border-radius: 8px;
  border: 0px;
  height: 62px;
  padding: 20px 0px 19px 26px;

  input {
    font-size: 1.07rem;
    line-height: 22px;
    background-color: ${(props) => props.theme.colors.titanWhite};
    border: 0px;
    color: ${(props) => props.theme.colors.melrose};
    ::placeholder {
      color: ${(props) => props.theme.colors.melrose};
    };
  }
`;

const SignInPasswordInputStyled = styled(AuthPassFieldStyled)`
  margin-bottom: 1rem;
`;

const AuthTitleStyled = styled.h3`
  font-size: 2.14rem;
  line-height: 52px;
  margin-bottom: 1.78rem;
  font-weight: 500;
`;

const AuthButtonStyled = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.indigo};
  box-shadow: 0px 4px 61px rgba(77, 71, 195, 0.4);
  border-radius: 9px;
  width: 100%;
  height: 59px;
  border: none;
  font-size: 1.14rem;
  line-height: 24px;
  color: #FFFFFF;
  margin-bottom: 3.85rem;
`;

const ForgotPassStyled = styled.p`
  margin-bottom: 3.28rem;
  text-align: center;
  font-size: 0.92rem;
  line-height: 24px;
  color: ${(props) => props.theme.colors.silverChalice};
  text-align: end;
  cursor: pointer;
`;

const SocialIconsWrapperStyled = styled(Row)`
  margin-bottom: ${(props) => (props.large ? 'default' : '1.42rem')};
`;

const SocialAuthTxtStyled = styled(ForgotPassStyled)`
  text-align: center;
  font-size: 1.14rem;
  cursor: text;
`;

const SocialIconStyled = styled.img`
  cursor: pointer;
  width:  41.46px;
  height: 41.46px;
`;

const SocialIconMidStyled = styled(SocialIconStyled)`
  margin-bottom: 1.42rem;
  margin-left: 20px;
`;

const EyeStyle = styled(Space)`
  width: 17px;
  height: 17px;
  color: ${(props) => props.theme.colors.melrose};
  margin-right: 1.78rem;
  cursor: pointer
`;

const AuthWrapperStyled = styled.div`
  font-family: 'Poppins', san-serif;
  font-weight: 500;
`;

export {
  ContainerStyled,
  AuthHeaderStyled,
  AuthHeadingStyled,
  AuthLoremStyled,
  AuthRedirectTxtStyled,
  AuthRedirectUrlStyled,
  AuthInfoWrapperStyled,
  AuthInfoStyled,
  SignInPasswordInputStyled,
  AuthTitleStyled,
  AuthButtonStyled,
  ForgotPassStyled,
  SocialIconStyled,
  SocialIconMidStyled,
  EyeStyle,
  SocialAuthTxtStyled,
  SocialIconsWrapperStyled,
  AuthWrapperStyled,
  AuthTextFieldStyled,
  AuthPassFieldStyled,
};
