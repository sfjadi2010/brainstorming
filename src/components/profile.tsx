'use client';

import { useSession } from "next-auth/react";

export default function Profile() {
    const session = useSession();

    if (session.data?.user) {
        return (
            <div>
                <div>Signed In</div>
                <div>{JSON.stringify(session.data.user)}</div>
            </div>
        );
    } 
    return <div>From client: user is not signed in</div>
}