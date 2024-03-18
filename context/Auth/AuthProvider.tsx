import { FC, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';

import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';

import { AuthContext, authReducer } from './';
import { IUser } from '../../interfaces';
import Concurso from '../../api/concurso';




export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
};

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined,
};

interface Props {
    children: JSX.Element,
};

export const AuthProvider: FC<Props> = ({ children }) => {

    const { enqueueSnackbar }= useSnackbar();
    const router = useRouter();

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    useEffect(() => {
      checkToken();

    }, []); 
 
    const checkToken = async( ) => {

        if( !Cookies.get('token') ) {
            return;
        }

        try {
            
            const { data }= await Concurso.get('/users/validate-token');
            const {token, user} = data;
            Cookies.set('token', token);
            console.log('User desde checkToken: ', user)
            
            dispatch({ type: 'Auth LogIn', payload:user })

          

        } catch (error) {
            Cookies.remove('token')
            
        } 

    };
    


    const logInUser = async (email: string, password: string ): Promise<boolean> => {

        try {
            
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password}),
            });

            const envio = await response.json();
            const { token, user } = envio;
            console.log('ususario provider:', user)

            Cookies.set('token', token);
            dispatch({ type: 'Auth LogIn', payload: user });

            if(user.isValid === true && user.role === 'admin' ){
                enqueueSnackbar('Entrada como administrador', {
                    variant:'success',
                    autoHideDuration: 3000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center'
                    }
                })
                
                return router.push('/usuario/admin');
            }; 

            if(user.isValid === true && user.role === 'participant'){
                enqueueSnackbar('Bienvenido' ,{
                    variant:'success',
                    autoHideDuration: 3000,
                    anchorOrigin: {
                        vertical:'top',
                        horizontal:'center'
                    }
                })

                return router.push('/usuario/concursante');
            };
            
            if(user.isValid === false ) {
                enqueueSnackbar('Usuario y/o Contraseña incorrectos', {
                    variant: 'warning',
                    autoHideDuration: 6000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center'
                    }
                })
                
            };

            return true;

        } catch (error) {

            return false;
        }
    };

    const logout = () => {
        Cookies.remove('token');
        router.replace('/');
        dispatch({ type: 'Auth LogOut' })
    };

    return (
    
    <AuthContext.Provider value= {{
        ...state,
        
        //Methods
        logInUser,
        logout,
    }}>

    { children }

    </AuthContext.Provider>
)
};