import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Ini Home</h1>
      <div>
        <p>Menu</p>
        <p>
          <Link to="/profile">Halaman Profil</Link>
        </p>
        <p>
          <Link to="/signin">Halaman Pendaftaran</Link>
        </p>
        <p>
          <Link to="/signup">Halaman Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
