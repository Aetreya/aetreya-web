import './signup.css';

function Signup() {
  return (
    <div className="container">
      <h1>Buat akun</h1>
      <form>
        <label htmlFor="name">
          Nama Pengguna
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="username">
          Username
          <input type="text" name="username" id="username" />
        </label>

        <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" />
        </label>

        <button type="submit">Daftar</button>
      </form>
    </div>
  );
}

export default Signup;
