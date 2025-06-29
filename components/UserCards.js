import { useRouter } from "next/router";
import toast from 'react-hot-toast';


export default function UserCard({ post }) {
    const router = useRouter();
    const createdDate = new Date(post.createdAt).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric'
    });

    const handleShare = async () => {
        const fullUrl = `${window.location.origin}/blog/${post.slug}`;

        try {
            await navigator.clipboard.writeText(fullUrl);
            toast.success("Link copied to clipboard!");
        } catch (err) {
            console.error("Copy failed:", err);
            toast.error("Failed to copy link.");
        }
    };

    return (
        <div className='flex flex-col justify-between border rounded-md shadow-md px-5 py-5 gap-2'>
            <div className="text-xl font-bold">{post.title}</div>
            <div>Created On: {createdDate}</div>
            <div className='flex flex-row gap-5'>

                <button onClick={() => router.push(`/blog/${post.slug}`)}
                    className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>
                    View
                </button>
                <button onClick={handleShare}
                    className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>
                    <span>Share</span>
                </button>
            </div>
        </div>
    );
}
