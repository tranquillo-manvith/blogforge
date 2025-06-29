import { useEffect, useState } from 'react';
import Link from 'next/link';
import UserCard from '@/components/UserCards';

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
            }
            catch (err) {
                console.error("Failed to fetch posts.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className='flex flex-col'>
            <div className='font-bold text-xl mt-5 mb-5'>Posts</div>
            {loading ? (
                <p className="text-gray-500 italic">Loading posts...</p>
            ) : posts.length === 0 ? (
                <p>No posts found.</p>
            ) : (
                <div className='responsive-grid gap-5 mt-5 mb-5'>
                    {posts.map((post) => (
                        <UserCard key={post._id} post={post} />
                    ))}
                </div>
            )}

        </div>
    );
}
