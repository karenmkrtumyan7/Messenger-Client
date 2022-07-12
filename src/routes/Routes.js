import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { NotFound } from '../pages/NotFound';
import UserReport from '../pages/UserReport';
import { PrivateRoute } from './PrivateRoute';
import { Verification } from '../pages/Verification';
import Pages from '../containers/common/Pages';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route exact index element={<Navigate to="/signin" />} />
        <Route path="signin" element={<Pages page={<SignIn />} />} />
        <Route path="signup" element={<Pages page={<SignUp />} />} />
        <Route path="verify/:id" element={<Pages page={<Verification />} />} />
      </Route>
      <Route path="/users" element={<PrivateRoute />}>
        <Route exact index element={<UserReport />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { AppRoutes as Routes };
