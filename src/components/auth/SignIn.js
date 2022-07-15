import { useEffect } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import localStorageService from 'services/localStorage.service';
import { ForgotPasswordPopup } from './ForgotPasswordPopup';
import { AuthSocial } from './AuthSocial';
import {
  AuthButtonStyled, AuthTitleStyled, SignInPasswordInputStyled,
  EyeStyle, AuthTextFieldStyled,
} from './Auth.styled';

const iconRenderer = (visible) => {
  const Eye = visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;
  return <EyeStyle>{ Eye }</EyeStyle>;
};

export function SignIn(props) {
  const { signInRequest, authData } = props;
  const navigate = useNavigate();
  const onFinish = (values) => signInRequest(values);

  useEffect(() => {
    if (Object.keys(authData).length) {
      localStorageService.set('auth', authData);
      navigate('/users', { replace: true });
    }
  }, [authData, navigate]);

  return (
    <Form
      name="signin"
      onFinish={onFinish}
      autoComplete="on"
    >
      <AuthTitleStyled level={3}>Sign In</AuthTitleStyled>
      <Form.Item
        name="userName"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <AuthTextFieldStyled placeholder="Enter email or user name" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <SignInPasswordInputStyled placeholder="Password" iconRender={iconRenderer} />
      </Form.Item>
      <ForgotPasswordPopup>Forgot password ?</ForgotPasswordPopup>
      <Form.Item>
        <AuthButtonStyled>Login</AuthButtonStyled>
      </Form.Item>
      <AuthSocial />
    </Form>
  );
}

SignIn.propTypes = {
  authData: PropTypes.object,
  signInRequest: PropTypes.func,
};

SignIn.defaultProps = {
  authData: {},
  signInRequest: null,
};
