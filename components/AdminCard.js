export default function AdminCard() {
    return (
        <div class='flex flex-col border rounded-md shadow-md px-5 py-5 gap-2'>
            <div>Title</div>
            <div>Created On: DD/MMM/YYYY</div>
            <div>Slug: post/[slug]</div>
            <div className='flex flex-row gap-5'>
                <button className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>Edit</button>
                <button className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>Delete</button>
                <button className='px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black'>View</button>
            </div>

        </div>
    );
}