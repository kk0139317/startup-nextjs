// pages/protected.js
import { useSession, getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ProtectedPage() {
    const { data: session, status } = useSession();
    const loading = status === "loading";
    const router = useRouter();

    useEffect(() => {
        if (!loading && !session) {
            router.push("/api/auth/signin");
        }
    }, [loading, session, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome {session.user.name}</p>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: "/api/auth/signin",
                permanent: false,
            },
        };
    }
    return {
        props: { session },
    };
}
