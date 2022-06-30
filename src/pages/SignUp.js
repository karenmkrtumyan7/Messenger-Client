import { Auth } from '../components/auth/Auth';
import SignUpForm from '../containers/auth/SignUp';

export function SignUp() {
  return (
    <Auth>
      <SignUpForm />
    </Auth>
  );
}
