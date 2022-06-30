import { Route, Routes, Navigate } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { NotFound } from '../pages/NotFound';
import { Messenger } from '../pages/Messenger';
import { PrivateRoute } from './PrivateRoute';
import { Verification } from '../pages/Verification';
import ErrorsNotification from '../containers/settings/ErrorsNotification';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route exact index element={<Navigate to="/signin" />} />
        <Route path="signin" element={<ErrorsNotification component={<SignIn />} />} />
        <Route path="signup" element={<ErrorsNotification component={<SignUp />} />} />
        <Route path="verify/:id" element={<ErrorsNotification component={<Verification />} />} />
      </Route>
      <Route path="messenger" element={<PrivateRoute />}>
        <Route exact index element={<Messenger />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { AppRoutes as Routes };
