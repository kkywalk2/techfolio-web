import {useRouter} from "next/navigation";
import {useUser} from "@/contexts/UserContext";
import React, {FC, useEffect} from "react";
import {JSX} from "react/jsx-runtime";
import IntrinsicAttributes = JSX.IntrinsicAttributes;

export function withAuth<P extends IntrinsicAttributes>(
    WrappedComponent: React.ComponentType<P>,
): FC<P> {
    return function ProtectedComponent(props: P) {
        const {user, loading} = useUser();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !user) {
                router.push("/login");
            }
        }, [user, loading, router]);

        if (loading || !user) {
            return <p>로딩 중...</p>; // or 로딩 스피너
        }

        return <WrappedComponent {...props} />;
    };
}
