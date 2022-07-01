import { Outlet, Navigate } from 'react-router-dom';

export function PrivateRoute() {
  const isAuthenticated = !!localStorage.getItem('auth');
  return isAuthenticated ? <Outlet /> : <Navigate to="/signup" />;
}
