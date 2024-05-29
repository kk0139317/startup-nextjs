'use client';
// app/pages/login.tsx
import React from 'react';
import LoginForm from '@/components/LoginForm';
const LoginPage: React.FC = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
