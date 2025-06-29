import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminCard from '@/components/AdminCard';

export default function Dashboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/posts');
            if (!res.ok) {
                console.error('Failed to fetch posts');
                return;
            }
            const data = await res.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    return (
        <div className='flex flex-col'>
            <div className='font-bold text-xl mt-5 mb-5'>Dashboard</div>
            <div>
                <Link href="/admin/create_post">
                    <button className='px-6 py-1 bg-green-200 text-black rounded-full hover:bg-green-500 border border-black mb-5'>
                        Create New Post
                    </button>
                </Link>
            </div>
            {posts.length === 0 ? (
                <p>No posts found.</p>
            ) : (
                <div className='grid grid-cols-3 gap-5 mt-5 mb-5'>
                    {posts.map((post) => (
                        <AdminCard key={post._id} post={post} />
                    ))}
                </div>
            )}

        </div>
    );
}
