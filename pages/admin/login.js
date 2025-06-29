import { useState, useEffect } from 'react';

export default function Login() {
    const [adminUsername, setAdminUsername] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    const handleSubmit = async () => {
        const res = await fetch('/admin/login', {
            method: 'POST',
            body: JSON.stringify({ adminUsername, adminPassword }),
        });

        if (!res.ok) {
            const errorText = await res.text(); // catch HTML response
            throw new Error(`Request failed: ${res.status} — ${errorText}`);
        }
        const data = await res.json();

        console.log(data);
    };

    return (
        <div className="flex justify-center ">
            <div className="rounded-md flex flex-col items-center px-10 py-10 mt-5 gap-5">
                <div className="flex text-2xl ">Admin Login</div>
                <input
                    type="text"
                    value={adminUsername}
                    onChange={(e) => setAdminUsername(e.target.value)}
                    placeholder="Admin Username"
                    className="border border-black p-2 rounded-md "
                />
                <input
                    type="text"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Admin Password"
                    className="border border-black p-2 rounded-md"
                />

                <div>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}