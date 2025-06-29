import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminCard from '@/components/AdminCard';

export default function Dashboard() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/posts');
                if (!res.ok) {
                    console.error('Failed to fetch posts');
                    return;
                }
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                console.error('Failed to fetch posts');
            } finally {
                setLoading(false);
            }

        };

        fetchPosts();
    }, []);

    return (
        <div className='flex flex-col'>
            <div className='font-bold text-xl mt-5 mb-5'>Admin Dashboard</div>
            <div>
                <Link href="/admin/create_post">
                    <button className='px-6 py-1 bg-green-200 text-black rounded-full hover:bg-green-500 border border-black mb-5'>
                        Create New Post
                    </button>
                </Link>
            </div>
            {loading ? (
                <p className="text-gray-500 italic">Loading posts...</p>
            ) : posts.length === 0 ? (
                <p>No posts found.</p>
            ) : (
                <div className='responsive-grid gap-5 mt-5 mb-5'>
                    {posts.map((post) => (
                        <AdminCard key={post._id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}
