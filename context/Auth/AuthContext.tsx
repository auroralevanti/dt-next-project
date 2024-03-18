import { createContext } from 'react';
import { IUser } from '../../interfaces';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IUser;

    //Methods
    logInUser: (usuario: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext({} as ContextProps);