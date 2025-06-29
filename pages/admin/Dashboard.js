import Link from 'next/link';
import AdminCard from '@/components/AdminCard';

export default function Dashboard() {
    return (
        <div className='flex flex-col '>
            <div className='font-bold text-xl mt-5 mb-5'>Dashboard</div>
            <div>
                <Link href="/admin/create_post">
                    <button className='px-6 py-1 bg-green-200 text-black rounded-full hover:bg-green-500 border border-black mb-5'>Create New Post</button>
                </Link>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-5 mb-5'>
                <AdminCard />
            </div>
        </div>
    );
}