import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { authProvider, firebase } from '../database/firebase';
import { usePersistedState } from '../hooks/usePersistedState';
import { User } from '../types/User';

interface AuthContextData {
  isAuthenticated: boolean;
  user: User;
  onLogin: () => void;
  onLogout: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = usePersistedState<string>('token', '');
  const [user, setUser] = usePersistedState<User>('user', {});
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  async function onLogin() {
    try {
      const auth = getAuth(firebase);
      const response = await signInWithPopup(auth, authProvider);
      const credential = GoogleAuthProvider.credentialFromResult(response);

      const accessToken = credential?.accessToken;

      if (!accessToken || !response.user) {
        throw new Error();
      }

      const autheticatedUser: User = {
        id: response.user.uid,
        name: response.user.displayName ?? 'John Doe',
        avatar:
          response.user.photoURL ??
          'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png',
      };

      setToken(accessToken);
      setUser(autheticatedUser);
      navigate('/dashboard');

    } catch {
      toast.error('Houve um erro ao fazer o login. Tente novamente.');
    }
  }

  function onLogout() {
    setToken('');
    setUser({} as User);
    navigate('/login');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
