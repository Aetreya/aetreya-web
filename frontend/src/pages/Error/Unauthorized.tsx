import { Link } from 'react-router-dom';
import './error.css';

export default function Unauthorized() {
  return (
    <div className="error-container">
      <h1>Anda tidak memiliki izin akses, silakan masuk terlebih dahulu</h1>
      <Link to="/signin" className="text-link">
        Masuk
      </Link>
    </div>
  );
}
