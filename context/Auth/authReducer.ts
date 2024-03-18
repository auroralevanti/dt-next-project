import { IUser } from '../../interfaces';
import { AuthState } from './';


type AuthActionState =
    | { type: 'Auth LogIn', payload: IUser }
    | { type: 'Auth LogOut' }


    export const authReducer = (state: AuthState, action: AuthActionState): AuthState => {
        
        switch (action.type) {

        case 'Auth LogIn':

            return {

                ...state,
                isLoggedIn: true,
                user: action.payload
                
            }

        case 'Auth LogOut':

            return {

                ...state,
                isLoggedIn: false,
                user: undefined,
        
            }

        default:
            return state;
        }
}