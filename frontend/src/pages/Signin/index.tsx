import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div className="container">
      <h1>Ini Signin</h1>
      <p>Kembali ke</p>
      <Link to="/">Beranda</Link>
    </div>
  );
}

export default Signin;
