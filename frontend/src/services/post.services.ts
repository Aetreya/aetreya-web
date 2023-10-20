import axios from 'axios';
import { PostData } from '../types/postData';

export async function createPost(token: string, data: PostData) {
  try {
    const config = {
      headers: { 'X-API-TOKEN': token },
    };

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/posts`,
      data,
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

export async function getAllPost() {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/posts`,
    );

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.errors);
    }

    throw new Error('Something went wrong');
  }
}
