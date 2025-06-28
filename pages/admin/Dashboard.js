import Link from 'next/link';
import AdminCard from '@/components/AdminCard';

export default function Dashboard() {
    return (
        <div className='flex flex-col '>
            <div className='font-bold text-xl mt-5 mb-5'>Dashboard</div>
            <div className='grid grid-cols-2 gap-5'>
                <AdminCard />
            </div>
        </div>
    );
}