import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
| { message: string }

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    

    const { idUserDiscord, nameUserDiscord } = req.body;
    const url = 'https://devquest.azurewebsites.net/api/Contest/SaveUserContest';

    try {
        const connectToBackSaveUser = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ idUserDiscord, nameUserDiscord })
        })

        const data = await connectToBackSaveUser.json();
        //TODO: Falta esperar a que diego cambie la respuesta


    } catch (error) {
        
    }
}