"use client"
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '@/libs/firebase';
import {setCookie} from "nookies";
// import {useRouter} from "next/navigation";

export default function LoginPage() {
    // const router = useRouter();

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);

            const user = result.user;

            if (user) {
                const idToken = await user.getIdToken();

                // 쿠키로 저장
                setCookie(null, "Authorization", `Bearer ${idToken}`, {
                    path: "/",
                    maxAge: 60 * 60, // 1시간
                    secure: process.env.NODE_ENV === "production",
                });
            }
        } catch (err) {
            console.error('❌ 로그인 에러:', err);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-2xl mb-4">Techfolio 로그인</h1>
            <button
                className="bg-black text-white px-4 py-2 rounded-xl shadow-md hover:bg-gray-800"
                onClick={handleLogin}
            >
                Google 계정으로 로그인
            </button>
        </div>
    );
}
