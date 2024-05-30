// services/authentication.ts
import { serialize } from 'cookie';

class AuthenticationService {
    static validateUser(username: string, password: string): boolean {
        // Replace this dummy logic with your actual authentication logic
        return username === 'user' && password === 'pass';
    }

    static generateToken(): string {
        // Replace this with your actual token generation logic
        return 'securetoken';
    }

    static setCookie(token: string, res): void {
        res.setHeader('Set-Cookie', serialize('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 30 * 24 * 60 * 60, // 30 days
            path: '/',
        }));
    }
}

export default AuthenticationService;
