import React from 'react';

interface ProfileProps {
    profile: {
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
    };
}

const url = "http://127.0.0.1:8000";

const Profile: React.FC<ProfileProps> = ({ profile }) => {
    if (!profile) {
        return <div>No profile found</div>;
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
                <div className="relative">
                    <div
                        className="w-full bg-cover bg-center h-64"
                        style={{ backgroundImage: `url(${url}/${cover_photo})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <img
                            className="w-40 h-40 rounded-full border-4 mt-56 border-white"
                            src={`${url}/${photo}`}
                            alt="Profile Picture"
                        />
                    </div>
                </div>
                <div className="p-8 pt-4">
                    <div className="text-center">
                        <h2 className="mt-4 text-3xl font-bold text-gray-800">{username}</h2>
                        <p className="text-lg text-gray-600">{about}</p>
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
