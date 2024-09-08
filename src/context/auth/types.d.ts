import { UserCredential } from '../../components/auth/types';

export type InitialStateProps = {
  loading: boolean;
  isLoggedIn: boolean;
  authUser?: UserCredential | null;
};

export type AuthContextProps = InitialStateProps & {
  onLogin: Function;
  onLogout: Function;
  setUser: Function;
};

export type ActionProps = {
  type: string;
  payload?: any;
};
