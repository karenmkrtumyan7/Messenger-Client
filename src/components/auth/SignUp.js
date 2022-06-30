import { useEffect } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form, notification } from 'antd';
import PropTypes from 'prop-types';
import { AuthSocial } from './AuthSocial';
import {
  AuthButtonStyled, AuthTitleStyled, EyeStyle, AuthPassFieldStyled, AuthTextFieldStyled,
} from './Auth.styled';
import {
  validateEmail, validatePassword, validatePhoneNumber, validateRepeatPassword, validateUserName,
} from '../../services/validation.service';

function iconRenderer(visible) {
  const Eye = visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;
  return <EyeStyle>{ Eye }</EyeStyle>;
}

export function SignUp(props) {
  const { registered, signUpRequest, signUpReset } = props;

  const onFinish = (values) => {
    signUpRequest(values);
  };

  useEffect(() => {
    if (registered) {
      notification.success({
        description: 'Verify your account with your email',
        placement: 'bottomLeft',
        duration: 180,
      });
    }

    signUpReset();

    return () => {
      if (!registered) {
        notification.destroy();
      }
    };
  }, [registered, signUpReset]);

  return (
    <>
      <Form name="signup" onFinish={onFinish} autoComplete="off">
        <AuthTitleStyled>Sign Up</AuthTitleStyled>
        <Form.Item
          name="email"
          rules={[
            () => ({
              validator(_, value) {
                const message = validateEmail(value);
                if (!message) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(message));
              },
            }),
          ]}
        >
          <AuthTextFieldStyled placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name="userName"
          rules={[
            () => ({
              validator(_, value) {
                const message = validateUserName(value);
                if (!message) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(message));
              },
            }),
          ]}
        >
          <AuthTextFieldStyled placeholder="Create User name" />
        </Form.Item>
        <Form.Item
          name="contact"
          rules={[
            () => ({
              validator(_, value) {
                const message = validatePhoneNumber(value);
                if (!message) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(message));
              },
            }),
          ]}
        >
          <AuthTextFieldStyled placeholder="Contact Number" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            () => ({
              validator(_, value) {
                const message = validatePassword(value);
                if (!message) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(message));
              },
            }),
          ]}
        >
          <AuthPassFieldStyled placeholder="Password" iconRender={iconRenderer} />
        </Form.Item>
        <Form.Item
          name="repeatPassword"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Repeat password is required!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                const message = validateRepeatPassword(value);
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(message));
              },
            }),
          ]}
        >
          <AuthPassFieldStyled placeholder="Confirm Password" iconRender={iconRenderer} />
        </Form.Item>
        <Form.Item>
          <AuthButtonStyled>Register</AuthButtonStyled>
        </Form.Item>
      </Form>
      <AuthSocial />
    </>
  );
}

SignUp.propTypes = {
  registered: PropTypes.bool,
  signUpRequest: PropTypes.func,
  signUpReset: PropTypes.func,
};

SignUp.defaultProps = {
  registered: false,
  signUpRequest: null,
  signUpReset: null,
};
