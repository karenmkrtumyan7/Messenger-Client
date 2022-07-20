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
  font-size: 50px;
  line-height: 75px;
`;

const AuthLoremStyled = styled.p`
  font-size: 35px;
  margin-bottom: 53px;
`;

const AuthRedirectTxtStyled = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const AuthRedirectUrlStyled = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: #4D47C3;
`;

const AuthInfoWrapperStyled = styled(Row)`
  justify-content: ${(props) => (props.large ? 'default' : 'center')};
  margin-top: ${(props) => (props.large ? '110px' : 0)};
`;

const AuthInfoStyled = styled(ContainerStyled)`
  padding-bottom: ${(props) => (props.large ? 'default' : '26px')};
`;

const AuthTextFieldStyled = styled(Input)`
  font-size: 15px;
  line-height: 22px;
  background-color: #F0EFFF !important;
  height: 62px;
  border: 0px;
  border-radius: 8px;
  padding: 20px 19px 19px 26px;
  color: #A7A3FF;

  ::placeholder {
    color: #A7A3FF;
  };
`;

const AuthPassFieldStyled = styled(Input.Password)`
  background-color: #F0EFFF !important;
  border-radius: 8px;
  border: 0px;
  height: 62px;
  padding: 20px 0px 19px 26px;

  input {
    font-size: 15px;
    line-height: 22px;
    background-color: #F0EFFF;
    border: 0px;
    color: #A7A3FF;
    ::placeholder {
      color: #A7A3FF;
    };
  }
`;

const SignInPasswordInputStyled = styled(AuthPassFieldStyled)`
  margin-top: 14px;
`;

const AuthTitleStyled = styled.h3`
  font-size: 30px;
  line-height: 52px;
  margin-bottom: 28px;
  font-weight: 500;
`;

const AuthButtonStyled = styled.button`
  cursor: pointer;
  background: #4D47C3;
  box-shadow: 0px 4px 61px rgba(77, 71, 195, 0.4);
  border-radius: 9px;
  width: 100%;
  height: 59px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  margin-bottom: 54px;
`;

const ForgotPassStyled = styled.p`
  margin-bottom: 46px;
  text-align: center;
  font-size: 13px;
  line-height: 24px;
  color: #B0B0B0;
  text-align: end;
  cursor: pointer;
`;

const SocialIconsWrapperStyled = styled(Row)`
  margin-bottom: ${(props) => (props.large ? 'default' : '20px')};
`;

const SocialAuthTxtStyled = styled(ForgotPassStyled)`
  text-align: center;
  font-size: 16px;
  cursor: text;
`;

const SocialIconStyled = styled.img`
  cursor: pointer;
  width:  41.46px;
  height: 41.46px;
`;

const SocialIconMidStyled = styled(SocialIconStyled)`
  margin-right: 20px;
  margin-left: 20px;
`;

const EyeStyle = styled(Space)`
  width: 17px;
  height: 17px;
  color: #A7A3FF;
  margin-right: 25px;
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
