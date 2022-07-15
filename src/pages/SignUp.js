import { Auth } from 'components/auth/Auth';
import SignUpForm from 'containers/auth/SignUp';

function SignUp() {
  return (
    <Auth>
      <SignUpForm />
    </Auth>
  );
}

export default SignUp;
