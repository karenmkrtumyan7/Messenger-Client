import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import { AppConstants } from 'constants/app.constants';
import {
  AuthButtonStyled, AuthTitleStyled, EyeStyle, AuthPassFieldStyled, AuthTextFieldStyled,
} from 'components/auth/Auth.styled';
import { AuthSocial } from 'components/auth/AuthSocial';

function iconRenderer(visible) {
  const Eye = visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;
  return <EyeStyle>{ Eye }</EyeStyle>;
}

const SignUp = (props) => {
  const { signUpRequest } = props;

  const onFinish = (values) => {
    signUpRequest(values);
  };

  return (
    <>
      <Form name="signup" onFinish={onFinish} autoComplete="off">
        <AuthTitleStyled>Sign Up</AuthTitleStyled>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Email is required',
            },
            {
              type: 'email',
              message: 'Email is not valid',
            },
          ]}
        >
          <AuthTextFieldStyled placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
            {
              pattern: AppConstants.regexp.username,
              message: 'Username is not valid',
            },
          ]}
        >
          <AuthTextFieldStyled placeholder="Create User name" />
        </Form.Item>
        <Form.Item
          name="contact"
          rules={[
            {
              required: true,
              message: 'Contact number is required',
            },
            {
              pattern: AppConstants.regexp.contactNumber,
              message: 'Contact number is not valid',
            },
          ]}
        >
          <AuthTextFieldStyled placeholder="Contact Number" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Password is required',
            },
            {
              pattern: AppConstants.regexp.password,
              message: 'Password is not valid',
            },
          ]}
        >
          <AuthPassFieldStyled placeholder="Password" iconRender={iconRenderer} />
        </Form.Item>
        <Form.Item
          name="repeatPassword"
          dependencies={['password']}
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Repeat password is not equal'));
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
};

SignUp.propTypes = {
  signUpRequest: PropTypes.func,
};

SignUp.defaultProps = {
  signUpRequest: null,
};

export { SignUp };
