import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="container">
      <h1>Ini Profile</h1>
      <p>Kembali ke</p>
      <Link to="/">Beranda</Link>
    </div>
  );
}

export default Profile;
