import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts';
import Forum from '../pages/Forum';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/Error/NotFound';
import ProtectedRoute from './protectedRoute';
import PrivateRoute from './privateRoute';

export default function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}
