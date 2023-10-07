import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { getUserData } from '../../services/user.services';
import { ApiResponse } from '../../types/apiResponse';
import { UserDetails } from '../../types/userDetails';

function Profile() {
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cookie, , removeCookie] = useCookies(['token']);
  const { token } = cookie;

  useEffect(() => {
    setIsLoading(true);
    getUserData(token)
      .then((res: ApiResponse<UserDetails>) => {
        setUserData(res.data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        if (error.message === 'Unauthorized') removeCookie('token');
        setIsLoading(false);
      });
  }, [removeCookie, token]);

  return (
    <div className="container">
      <h1>Profil Pengguna</h1>
      {userData && (
        <ul>
          <li>Username: {userData.username}</li>
          <li>Nama: {userData.name}</li>
          <li>Role: {userData.role}</li>
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
      <p>Kembali ke</p>
      <Link to="/">Beranda</Link>
    </div>
  );
}

export default Profile;
