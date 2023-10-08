import { Link } from 'react-router-dom';
import './error.css';

export default function NotFound() {
  return (
    <div className="error-container">
      <h1>Halaman tidak ditemukan</h1>
      <Link to="/" className="text-link">
        Kembali ke beranda
      </Link>
    </div>
  );
}
