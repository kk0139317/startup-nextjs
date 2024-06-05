'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';
import Profile from '@/components/Profile';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const cookies = parseCookies();
                const token = cookies.authToken;
                if (!token) {
                    setError('User not authenticated');
                    router.push('/signin')
                    setLoading(false);
                    return;
                }

                const response = await axios.get('http://127.0.0.1:8000/api/current_user_profile/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setProfile(response.data);
                setLoading(false);
                
            } catch (err) {

                setError('Error fetching profile');
                router.push('/signin')
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <Profile profile={profile} />
        </div>
    );
};

export default ProfilePage;
