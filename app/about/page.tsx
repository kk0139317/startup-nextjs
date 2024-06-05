'use client';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "",
//   description: "",
//   // other metadata
// };

interface ProfileProps {
  username: string;
  // other profile fields...
}

const AboutPage: React.FC = () => {
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
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

        const response = await axios.get(`${process.env.BACKEND_URL}/api/current_user_profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile(response.data);
        setLoading(false);
        console.log('Logged in user:', response.data.username);  // Log the username
      } catch (err) {
        setError('Error fetching profile');
        router.push('/')
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <h1>Welcome, {profile?.username}!</h1>
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
