"use client"
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '@/libs/firebase';
import {setCookie} from "nookies";
import {useRouter} from "next/navigation";
import Image from 'next/image';

export default function Login() {
    const router = useRouter();

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);

            const user = result.user;

            if (user) {
                const idToken = await user.getIdToken();

                // 쿠키로 저장
                setCookie(null, "firebase-jwt-token", `${idToken}`, {
                    path: "/",
                    maxAge: 60 * 60, // 1시간
                    secure: process.env.NODE_ENV === "production",
                });
            }
            router.push('/challenges');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Welcome Back</h1>
                <button
                    onClick={handleGoogleLogin}
                    className="flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <Image
                        src="https://www.google.com/favicon.ico"
                        alt="Google"
                        width={24}
                        height={24}
                        className="mr-2"
                    />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}
