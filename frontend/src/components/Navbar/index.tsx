import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
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
          <li>
            <Link to="/profile" className="text-link">
              Profil
            </Link>
          </li>
          <li>
            <Link to="/signin" className="text-link">
              Masuk
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-link">
              Daftar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
