import { useRouter } from "next/router";
import toast from 'react-hot-toast';

export default function AdminCard({ post }) {
    const router = useRouter();
    const createdDate = new Date(post.createdAt).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric'
    });

    const updatedDate = new Date(post.updatedAt).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric'
    });

    const handleDelete = async () => {
        const confirmDelete = confirm(`Delete "${post.title}"?`);
        if (!confirmDelete) return;

        try {
            const res = await fetch(`/api/posts/${post.slug}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const error = await res.json();
                toast.error("Failed to delete: " + error.message);
                return;
            }

            toast.success("Post deleted!");
            router.reload();
        } catch (err) {
            toast.error("Unexpected error");
            console.error(err);
        }
    };

    return (
        <div className='flex flex-col border rounded-md shadow-md px-5 py-5 gap-2'>
            <div className="text-xl font-bold">{post.title}</div>
            <div>Created On: {createdDate}</div>
            <div>Last Updated: {updatedDate}</div>
            <div className="text-sm italic">Slug: post/{post.slug}</div>
            <div className='flex flex-row gap-5'>
                <button onClick={() => router.push(`/admin/edit/${post.slug}`)} className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>
                    Edit
                </button>
                <button onClick={handleDelete} className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>
                    Delete
                </button>
                <button className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>
                    View
                </button>
            </div>
        </div>
    );
}
