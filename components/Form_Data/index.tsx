'use client';
import React, { useState, useEffect } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies'

const Form_Data = () => {

    const [users, setUsers] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const router = useRouter(); // Initialize useRouter

    useEffect(() => {
        const cookies = parseCookies();
        if (!cookies.authToken) {
            router.push('/signin'); // Redirect to signin if no auth token
        } else {
            setIsAuthenticated(true); // Set authenticated state if token exists
        }
    }, [router]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/users/')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <section className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
            <div className="w-auto pl-10 flex">
                <div className="container p-2 mx-auto ml-14 sm:p-4 dark:text-gray-800">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">User Details</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                            <colgroup>
                                <col className="w-5" />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-5" />
                            </colgroup>
                            <thead>
                                <tr className="dark:bg-gray-300">
                                    <th className="p-3">A-Z</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">About</th>
                                    <th className="p-3">City</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Address</th>
                                    <th className="p-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td className="px-3 text-2xl font-medium dark:text-gray-600">
                                            {user.first_name.charAt(0).toUpperCase()}
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{user.first_name} {user.last_name}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <span>{user.about}</span>
                                            {/* <p className="dark:text-gray-600">{user.company}</p> */}
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{user.city}( {user.country} )</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{user.email}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{user.address}</p>
                                            <p className="dark:text-gray-600">{user.street_address}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                                    <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form_Data;
