import { useCookies } from 'react-cookie';

export default function useAuth() {
  const [cookies] = useCookies(['token']);
  return cookies.token;
}
