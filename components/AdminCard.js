export default function AdminCard({ post }) {
    const createdDate = new Date(post.createdAt).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric'
    });

    const updatedDate = new Date(post.updatedAt).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric'
    });

    return (
        <div className='flex flex-col border rounded-md shadow-md px-5 py-5 gap-2'>
            <div className="text-xl font-bold">{post.title}</div>
            <div>Created On: {createdDate}</div>
            <div>Last Updated: {updatedDate}</div>
            <div className="text-sm italic">Slug: post/{post.slug}</div>
            <div className='flex flex-row gap-5'>
                <button className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>Edit</button>
                <button className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>Delete</button>
                <button className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>View</button>
            </div>
        </div>
    );
}
