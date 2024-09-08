import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useReducer,
} from 'react';
import { UserCredential } from '../../components/auth/types';
import { ActionProps, AuthContextProps, InitialStateProps } from './types';

const initialState = {
  loading: true,
  isLoggedIn: false,
  authUser: null,
};

const authReducer = (state: InitialStateProps, action: ActionProps) => {
  switch (action.type) {
    case 'setLoggedIn': {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
    }
    case 'setLoggedOut': {
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        authUser: null,
      };
    }
    case 'loaded': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'setUser': {
      return {
        ...state,
        authUser: action.payload,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
};

const AuthContext: React.Context<AuthContextProps> = createContext(null as any);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const onLogin = () => dispatch({ type: 'setLoggedIn' });
  const onLogout = () => dispatch({ type: 'setLoggedOut' });
  const onLoaded = () => dispatch({ type: 'loaded' });
  const setUser = (user: UserCredential | null) =>
    dispatch({ type: 'setUser', payload: user });

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const isLoggedIn = JSON.parse(
          sessionStorage.getItem('isLoggedIn') as string
        );
        const authUser = JSON.parse(localStorage.getItem('authUser') as string);
        if (authUser) {
          setUser(authUser);
        }
        if (isLoggedIn) {
          onLogin();
        } else {
          setUser(null);
          onLoaded();
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchAuthData();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, onLogin, onLogout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
