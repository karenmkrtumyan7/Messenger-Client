import { Auth } from '../components/auth/Auth';
import SignInForm from '../containers/auth/SignIn';

export function SignIn() {
  return (
    <Auth>
      <SignInForm />
    </Auth>
  );
}
