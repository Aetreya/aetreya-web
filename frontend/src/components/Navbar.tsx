import { Link } from 'react-router-dom';
import './navbar.css';
import { useCookies } from 'react-cookie';
import useAuth from '../hooks/useAuth';

export default function Navbar() {
  const [, , removeCookie] = useCookies(['token']);
  const authorized = useAuth();

  const handleLogout = () => {
    removeCookie('token');

    window.location.href = '/';
  };

  return (
    <div className="navbar">
      <div id="logo">
        <h1>Aetreya</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="text-link">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/forum" className="text-link">
              Forum
            </Link>
          </li>
          {authorized ? (
            <>
              <li>
                <Link to="/profile" className="text-link">
                  Profil
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogout} className="text-link">
                  Keluar
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/auth/login" className="text-link">
                Masuk
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
