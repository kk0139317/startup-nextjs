// pages/profile.tsx
'use client';
// pages/profile.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface ProfileProps {
    username: string;
    about: string;
    photo: string;
    cover_photo: string;
    first_name: string;
    last_name: string;
    email: string;
    country: string;
    street_address: string;
    city: string;
    region: string;
    postal_code: string;
    comments: boolean;
    candidates: boolean;
    offers: boolean;
    push_notifications: string;
}

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<ProfileProps | null>(null);
    const router = useRouter();
    const id = router.query.id ? String(router.query.id) : ''; // Provide a default value when id is undefined

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`/api/profile/${id}`);
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [id]);

    if (!profile) {
        return <div>Loading...</div>;
    }

    const {
        username,
        about,
        photo,
        cover_photo,
        email,
        country,
        street_address,
        city,
        region,
        postal_code,
        comments,
        candidates,
        offers,
        push_notifications
    } = profile;

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="w-3/4 mt-28 mb-10 bg-white shadow-md rounded-lg overflow-hidden">
                <div
                    className="w-full bg-cover bg-center h-64 relative"
                    style={{ backgroundImage: `url(${cover_photo})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                            <h1 className="text-4xl font-bold">{username}</h1>
                            <p className="text-lg">{about}</p>
                        </div>
                    </div>
                </div>
                <div className="p-8 -mt-40 ">
                    <div className="text-center -mt-2 ">
                        <img
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200"
                            src={photo}
                            alt="Profile Picture"
                        />
                        <h2 className="mt-4 text-3xl font-bold text-gray-800">{username}</h2>
                        <p className="text-lg text-gray-600">Software Developer</p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">About Me</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">{about}</p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Contact Information</h3>
                        <ul className="text-lg text-gray-700">
                            <li>Email: {email}</li>
                            <li>Country: {country}</li>
                            <li>Street Address: {street_address}</li>
                            <li>City: {city}</li>
                            <li>Region: {region}</li>
                            <li>Postal Code: {postal_code}</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Preferences</h3>
                        <ul className="text-lg text-gray-700">
                            <li>Comments: {comments ? 'Enabled' : 'Disabled'}</li>
                            <li>Candidates: {candidates ? 'Enabled' : 'Disabled'}</li>
                            <li>Offers: {offers ? 'Enabled' : 'Disabled'}</li>
                            <li>Push Notifications: {push_notifications}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
