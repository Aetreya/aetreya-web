import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProtectedRoute() {
  const authorized = useAuth();

  return !authorized ? (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/" />
  );
}
