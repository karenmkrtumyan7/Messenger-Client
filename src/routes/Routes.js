import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { NotFound } from 'pages/NotFound';
import UserReport from 'pages/UserReport';
import { Verification } from 'pages/Verification';
import Pages from 'containers/common/Pages';
import { PrivateRoute } from 'routes/PrivateRoute';
import Account from 'pages/Account';
import history from 'services/history';
import UserDetails from 'pages/UserDetails';
import Messenger from 'pages/Messenger';

function AppRoutes() {
  return (
    <HistoryRouter history={history} location={history.location}>
      <Routes>
        <Route path="/">
          <Route path="signin" element={<Pages page={<SignIn />} />} />
          <Route path="signup" element={<Pages page={<SignUp />} />} />
          <Route path="verify/:id" element={<Pages page={<Verification />} />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route exact index element={<Pages page={<Account />} />} />
        </Route>
        <Route path="/users/" element={<PrivateRoute />}>
          <Route exact index element={<UserReport />} />
          <Route path=":id" element={<UserDetails />} />
        </Route>
        <Route path="/messenger/" element={<PrivateRoute />}>
          <Route exact index element={<Messenger />} />
          <Route path=":id" element={<Messenger />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export { AppRoutes as Routes };
