// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import AuthenticationService from '../../services/authentication';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { username, password } = req.body;

    if (AuthenticationService.validateUser(username, password)) {
        const token = AuthenticationService.generateToken();
        AuthenticationService.setCookie(token, res);
        return res.status(200).json({ token });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
};
