import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts';
import Forum from '../pages/Forum';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import NotFound from '../pages/Error/NotFound';

function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default RootRouter;
