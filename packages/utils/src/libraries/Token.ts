import { jwtDecode } from 'jwt-decode';
import { moment } from './Date';

export { jwtDecode } from 'jwt-decode';

interface AuthTokenData {
  email: string;
  exp: number;
}

export const isTokenValid = (token: string): boolean => {
  if (!token) return false;
  const { exp } = jwtDecode<AuthTokenData>(token);
  const date = moment.unix(exp);
  return moment().isBefore(date);
};
