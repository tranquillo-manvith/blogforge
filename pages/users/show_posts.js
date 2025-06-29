import Link from 'next/link';
import UserCard from '@/components/UserCards';

export default function show_post() {
    return (
        <div className='flex flex-col '>
            <div className='font-bold text-xl mt-5 mb-5'>Posts</div>
            <div className='grid grid-cols-3 gap-5 mt-5 mb-5'>
                <UserCard />
            </div>
        </div>
    );
}