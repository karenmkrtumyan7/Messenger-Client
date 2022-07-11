import { Outlet, Navigate } from 'react-router-dom';
import localStorageService from '../services/localStorage.service';

export function PrivateRoute() {
  const isAuthenticated = !!localStorageService.get('auth');
  return isAuthenticated ? <Outlet /> : <Navigate to="/signup" />;
}
