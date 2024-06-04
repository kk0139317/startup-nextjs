'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';
import Profile from '@/components/Profile';

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const cookies = parseCookies();
                const token = cookies.authToken;
                if (!token) {
                    setError('User not authenticated');
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
