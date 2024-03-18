import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    const {userName, userEmail, userPassword, discordId, discordName, userRole, discordMemberSince} = req.body;
    const url = 'https://devquest.azurewebsites.net/api/User/createUser'

    try {
        const connectToBack = await fetch(url, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName, userEmail, userPassword, discordId, discordName, userRole, discordMemberSince})
        })

        const response = await connectToBack.json();
        console.log(response)

        
    } catch (error) {
        
    }

    
}