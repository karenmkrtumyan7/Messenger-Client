import { Outlet, Navigate } from 'react-router-dom';
import localStorageService from 'services/localStorage.service';
import Pages from 'containers/common/Pages';
import BaseLayout from 'BaseLayout';

export function PrivateRoute() {
  const isAuthenticated = !!localStorageService.get('auth');
  return isAuthenticated
    ? <Pages page={<BaseLayout><Outlet /></BaseLayout>} />
    : <Navigate to="/signin" />;
}
