import { Auth } from 'components/auth/Auth';
import SignUpForm from 'containers/auth/SignUp';

const SignUp = () => (
  <Auth>
    <SignUpForm />
  </Auth>
);

export default SignUp;
