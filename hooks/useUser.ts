// hooks/useUser.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';

interface User {
    username: string;
    email: string;
    // Add other user properties here
}

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const cookies = parseCookies();
            const token = cookies.authToken;

            if (token) {
                try {
                    const response = await axios.get(`${process.env.BACKEND_URL}/api/user/`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        
                    });
                    setUser(response.data);
                } catch (error) {
                    console.error('Error fetching user:', error);
                    setUser(null);
                }
            }

            setLoading(false);
        };

        fetchUser();
    }, []);

    return { user, loading };
};
