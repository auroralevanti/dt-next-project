 import type { NextApiRequest, NextApiResponse } from 'next';

type Data = 

| { message: string }
| { user:{ 
        userId: number,
        userGuid: string,
        email: string,
        password: string,
        role: string,
        discordId: number,
        discordName: string,
        discordMemberSince: string,
        createdAt: string
 }
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
   
    const { email, password } =  req.body;

    const loginUrl = 'https://devquest.azurewebsites.net/api/Login/login';

    try {
        
        const connectToNetBackLogin = await fetch(loginUrl, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })

        })

        const data = await connectToNetBackLogin.json();

        console.log('data login: ', data);

        const { userId, userGuid, role, discordId, discordName, discordMemberSince, createdAt } = data.Objeto

        if( data.IsExito === false){
            return res.status(412).json({ message: 'No posee acceso'})
        }

        return res.status(200).json({
            ...data,
            user: {userId, userGuid, email, password, role, discordId, discordName, discordMemberSince, createdAt}
        })

    } catch (error) {

        return res.status(400).json({ message: 'Bad request' });
        
    }

} 