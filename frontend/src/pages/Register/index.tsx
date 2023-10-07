import { FormEvent, useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { UserRegisterRequest } from '../../types/userRegisterRequest';
import { register } from '../../services/user.services';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState<{
    message: string | null;
    success: boolean;
  }>({ message: null, success: false });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotif({ message: null, success: false });
    setIsLoading(true);

    const data: UserRegisterRequest = {
      name: e.currentTarget.full_name.value,
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    register(data)
      .then(() => {
        setIsLoading(false);
        e.currentTarget.full_name.value = null;
        setNotif({ message: 'Registrasi berhasil, silakan', success: true });
      })
      .catch((error) => {
        setIsLoading(false);
        setNotif({ message: error.message as string, success: false });
      });
  };

  return (
    <div className="container">
      <h1>Buat akun</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="full_name">
          Nama Lengkap
          <input type="text" name="full_name" id="full_name" required />
        </label>
        <label htmlFor="username">
          Username
          <input type="text" name="username" id="username" required />
        </label>

        <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" required />
        </label>

        <button type="submit">Daftar</button>
      </form>
      <div className="flasher">
        {isLoading && <p>Loading...</p>}
        {notif.message && (
          <p>
            {notif.message}
            {notif.success && (
              <Link to="/signin" className="text-link">
                masuk
              </Link>
            )}
          </p>
        )}
      </div>
      <p className="login-notice">
        Sudah memiliki akun? Silakan{' '}
        <Link to="/auth/login" className="text-link">
          login
        </Link>
      </p>
    </div>
  );
}
