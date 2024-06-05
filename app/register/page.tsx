'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/register/', { username, email, password });
            router.push('/login');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                            <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                                Create an account
                            </h3>
                            <p className="mb-11 text-center text-base font-medium text-body-color">
                                Sign up to access all features.
                            </p>
                            <form onSubmit={handleRegister}>
                                <div className="mb-8">
                                    <label htmlFor="username" className="mb-3 block text-sm text-dark dark:text-white">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Enter your Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="email" className="mb-3 block text-sm text-dark dark:text-white">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="password" className="mb-3 block text-sm text-dark dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                                    />
                                </div>
                                <div className="mb-6">
                                    <button type="submit" className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                                        Sign up
                                    </button>
                                </div>
                            </form>
                            <p className="text-center text-base font-medium text-body-color">
                                Already have an account?{' '}
                                <Link href="/login" className="text-primary hover:underline">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 top-0 z-[-1]">
                {/* SVG Background */}
            </div>
        </section>
    );
};

export default RegisterPage;
