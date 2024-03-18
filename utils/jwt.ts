import jwt from 'jsonwebtoken';

export const validUserToken = (userGuid: string) => {

    if (!process.env.SIGNIN_JWT_SECRET_SEED) {
        throw new Error ('Imposible Validar Usuario. Verificar token ');
    }

    return jwt.sign(
        //payload
        { userGuid },

        //Secret Seed
        process.env.SIGNIN_JWT_SECRET_SEED!,

        //opciones
        { expiresIn: '1d' }
    )

};

export const validateToken = ( token:string ):Promise<string> => {

    if ( !process.env.SIGNIN_JWT_SECRET_SEED ){
        throw new Error ('Imposible Validar Usuario. Verificar token');
    }

    return new Promise(( resolve, reject) => {

        try {
            jwt.verify( token, process.env.SIGNIN_JWT_SECRET_SEED || '', (error, payload) => {
                if (error)
                return reject('Error en validación de token');

                const { userGuid } = payload as {userGuid:string};
                console.log('userGuid desde jwt: ', userGuid)
                console.log('payload desde jwt: ', payload)
                resolve(userGuid);
            })
            
        } catch (error) {
            
            reject('Error en validación de token');
        }
    })
};