// pages/register.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import bcrypt from 'bcryptjs';
import { Client } from 'pg';

const client = new Client({
    user: 'nextjsuser',
    host: 'localhost',
    database: 'nextjslogindb',
    password: 'kundan1121',
    port: 5432,
});

client.connect();

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hashedPassword = bcrypt.hashSync(password, 10);

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password: hashedPassword }),
        });

        if (res.ok) {
            router.push('/api/auth/signin');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
}
