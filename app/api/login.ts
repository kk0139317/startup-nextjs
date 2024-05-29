// app/api/login.ts
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;
    try {
        if (method === 'POST') {
            const response = await axios.post('http://localhost:8000/api/accounts/login/', body);
            res.status(response.status).end();
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        console.error(error);
        res.status(error.response?.status || 500).end(error.message);
    }
}
