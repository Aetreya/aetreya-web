import axios from 'axios';
import { UserRegisterRequest } from '../types/userRegisterRequest';
import { UserLoginRequest } from '../types/userLoginRequest';

export async function register(data: UserRegisterRequest) {
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

export async function login(data: UserLoginRequest) {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
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

export async function getUserData(token: string) {
  try {
    const config = {
      headers: { 'X-API-TOKEN': token },
    };

    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/users/current`,
      config,
    );

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.errors);
    }
    throw new Error('Something went wrong');
  }
}
