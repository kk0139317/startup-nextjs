'use client';
import React from 'react'
import Profile from '@/components/Profile'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { useParams } from 'next/navigation'

const page = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const params = useParams<{ tag: string; item: string }>()

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params.id)
  const id = params.id;
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
        const response = await axios.get(`http://127.0.0.1:8000/api/profile/${id}`, {
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

  return (
    <div>
      <Profile profile={profile} urls="" />
    </div>
  )
}

export default page