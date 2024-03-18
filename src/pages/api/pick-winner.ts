import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    const urlToBack = 'https://devquest.azurewebsites.net/api/User/pickWinner'

    const connectToBack = await fetch(urlToBack, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })

    const data = await connectToBack.json();
    console.log(data)
}