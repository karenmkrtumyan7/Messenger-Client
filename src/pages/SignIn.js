import { Auth } from 'components/auth/Auth';
import SignInForm from 'containers/auth/SignIn';

const SignIn = () => (
  <Auth>
    <SignInForm />
  </Auth>
);

export default SignIn;
