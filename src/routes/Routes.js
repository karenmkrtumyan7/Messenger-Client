import { Route, Routes } from 'react-router-dom';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { NotFound } from 'pages/NotFound';
import UserReport from 'pages/UserReport';
import { Verification } from 'pages/Verification';
import Pages from 'containers/common/Pages';
import { PrivateRoute } from 'routes/PrivateRoute';
import { Account } from 'pages/Account';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="signin" element={<Pages page={<SignIn />} />} />
        <Route path="signup" element={<Pages page={<SignUp />} />} />
        <Route path="verify/:id" element={<Pages page={<Verification />} />} />
      </Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route exact index element={<Pages page={<Account />} />} />
      </Route>
      <Route path="/users" element={<PrivateRoute />}>
        <Route exact index element={<UserReport />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { AppRoutes as Routes };
