export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        const response = await fetch('http://127.0.0.1:8000/api/signinpage/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// app/api/login.ts
// import axios from 'axios';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { method, body } = req;
//     try {
//         if (method === 'POST') {
//             const response = await axios.post('http://localhost:8000/api/accounts/login/', body);
//             res.status(response.status).end();
//         } else {
//             res.setHeader('Allow', ['POST']);
//             res.status(405).end(`Method ${method} Not Allowed`);
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(error.response?.status || 500).end(error.message);
//     }
// }

