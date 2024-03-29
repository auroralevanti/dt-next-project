import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
    | { message: string }
    | { resultado: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {


    const { discordId, discordName } = req.body;
    const url = 'https://devquest.azurewebsites.net/api/Contest/SaveUserContest';

    try {
        const connectToBackSaveUser = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ discordId, discordName })
        })

        const data = await connectToBackSaveUser.json();
        const { resultado } = data.Objeto.transaction;
        console.log(data)

        return res.status(200).json({
            ...data,
            resultado,
        })


    } catch (error) {
        return res.status(400).json({ message: 'Bad request' });
    }
}