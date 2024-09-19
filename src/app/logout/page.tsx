'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { GetRemoveCookies } from '../api/actions/remove_cookies';
export default function LogoutPage() {
    const router = useRouter();
    useEffect(() => {
        const logout = async () => {
            await GetRemoveCookies();
            router.push('/login');
        };
        const timer = setTimeout(logout, 3000);
        return () => clearTimeout(timer);
    }, [router]);
    return (
        <section className='w-full min-h-screen gap-2 flex flex-col justify-center items-center'>
            <ReactLoading type='spin' color='#79D1FF' height={100} width={100} />
            <div>Logging out...</div>
        </section>
    );
};