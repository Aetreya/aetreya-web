import axios from 'axios';
import { UserRegisterRequest } from '../types/userRegisterRequest';

export default async function register(data: UserRegisterRequest) {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/users`,
      data,
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.errors);
    }
    throw new Error('Something went wrong');
  }
}
