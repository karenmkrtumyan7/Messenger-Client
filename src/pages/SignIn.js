import { Auth } from '../components/auth/Auth';
import SignInForm from '../containers/auth/SignIn';

function SignIn() {
  return (
    <Auth>
      <SignInForm />
    </Auth>
  );
}

export default SignIn;
