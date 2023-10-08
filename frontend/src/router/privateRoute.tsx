import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Unauthorized from '../pages/Error/Unauthorized';

export default function PrivateRoute() {
  const authorized = useAuth();

  return authorized ? <Outlet /> : <Unauthorized />;
}
