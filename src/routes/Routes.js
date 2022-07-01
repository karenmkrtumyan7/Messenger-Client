import { Route, Routes, Navigate } from 'react-router-dom';
// import { useEffect } from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { NotFound } from '../pages/NotFound';
import { Users } from '../pages/Users';
import { PrivateRoute } from './PrivateRoute';
import { Verification } from '../pages/Verification';
import ErrorsNotification from '../containers/settings/ErrorsNotification';
// import { authApi } from '../utils/axios.instance';

function AppRoutes() {
  // useEffect(() => {
  //   authApi().interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       if (error.response.status === 401) {
  //         // eslint-disable-next-line no-console
  //         console.log(401);
  //       }
  //     },
  //   );
  // });
  return (
    <Routes>
      <Route path="/">
        <Route exact index element={<Navigate to="/signin" />} />
        <Route path="signin" element={<ErrorsNotification component={<SignIn />} />} />
        <Route path="signup" element={<ErrorsNotification component={<SignUp />} />} />
        <Route path="verify/:id" element={<ErrorsNotification component={<Verification />} />} />
      </Route>
      <Route path="/users" element={<PrivateRoute />}>
        <Route exact index element={<Users />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { AppRoutes as Routes };
