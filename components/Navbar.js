import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("allowAdmin");
        setIsAdmin(stored === "true");
    }, []);

    return (
        <nav className="mob-navbar bg-white shadow-md px-6 py-4 flex flex-row justify-between items-center">


            {/* Logo - Left */}
            <div className='flex'>
                <Link href="/" className="text-2xl font-bold text-black">
                    BlogForge
                </Link>
            </div>

            <div className='flex'>
                {/* Navigation Links - Right */}
                <ul className="flex flex-row gap-10 text-black">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/users/show_posts">View Posts</Link>
                    </li>
                    {isAdmin ? (
                        <li>
                            <Link href="/admin/dashboard">Admin Dashboard</Link>
                        </li>
                    ) : (
                        <li>
                            <Link href="/admin/login">Admin Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}