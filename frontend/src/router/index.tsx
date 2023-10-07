import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts';
import Forum from '../pages/Forum';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import NotFound from '../pages/Error/NotFound';
import ProtectedRoute from './protectedRoute';
import PrivateRoute from './privateRoute';
import Unauthorized from '../pages/Error/Unauthorized';

function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default RootRouter;
