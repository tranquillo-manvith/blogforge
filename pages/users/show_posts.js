import { useEffect, useState } from 'react';
import Link from 'next/link';
import UserCard from '@/components/UserCards';

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
            <div className='font-bold text-xl mt-5 mb-5'>Posts</div>
            {posts.length === 0 ? (
                <p>No posts found.</p>
            ) : (
                <div className='grid grid-cols-3 gap-5 mt-5 mb-5'>
                    {posts.map((post) => (
                        <UserCard key={post._id} post={post} />
                    ))}
                </div>
            )}

        </div>
    );
}
