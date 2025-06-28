import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

            {/* Logo - Left */}
            <Link href="/" className="text-2xl font-bold text-black">
                BlogForge
            </Link>

            {/* Navigation Links - Right */}
            <ul className="flex flex-row gap-10 text-black">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/posts">View Posts</Link>
                </li>
                <li>
                    <Link href="/admin/posts">Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
}