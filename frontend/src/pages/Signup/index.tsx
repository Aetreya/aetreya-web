import { FormEvent, useState } from 'react';
import './signup.css';
import { UserRegisterRequest } from '../../types/userRegisterRequest';
import { register } from '../../services/user.services';

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    const data: UserRegisterRequest = {
      name: e.currentTarget.full_name.value,
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    register(data)
      .then(() => {
        setIsLoading(false);
        setMessage('Registrasi berhasil, silakan login.');
      })
      .catch((error) => {
        setIsLoading(false);
        setMessage(error.message);
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
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Signup;
