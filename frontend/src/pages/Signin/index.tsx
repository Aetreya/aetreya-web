import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import { useCookies } from 'react-cookie';
import { UserLoginRequest } from '../../types/userLoginRequest';
import { login } from '../../services/user.services';
import { ApiResponse } from '../../types/apiResponse';
import { UserLoginData } from '../../types/UserLoginData';

function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<null | string>(null);

  const [, setCookie] = useCookies(['token', 'expiredAt']);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    const data: UserLoginRequest = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    login(data)
      .then((res: ApiResponse<UserLoginData>) => {
        const maxAge = Number(res.data?.expiredAt);
        setIsLoading(false);
        setMessage('Login berhasil');
        setCookie('token', res.data?.token, { path: '/', maxAge });
      })
      .catch((error) => {
        setIsLoading(false);
        setMessage(error.message);
      });
  };

  return (
    <div className="container">
      <h1>Masuk</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <input type="text" name="username" id="username" required />
        </label>

        <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" required />
        </label>

        <button type="submit">Masuk</button>
      </form>
      <div className="flasher">
        {isLoading && <p>Loading...</p>}
        {message && <p>{message}</p>}
      </div>
      <p className="signup-notice">
        Belum memiliki akun? Silakan{' '}
        <Link to="/signup" className="text-link">
          daftar disini.
        </Link>
      </p>
    </div>
  );
}

export default Signin;
