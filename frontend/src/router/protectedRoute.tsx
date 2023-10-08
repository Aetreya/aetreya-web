import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function ProtectedRoute() {
  const authorized = useAuth();

  return !authorized ? <Outlet /> : <Navigate to="/" />;
}
