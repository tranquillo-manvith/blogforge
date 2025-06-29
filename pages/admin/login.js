import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async () => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                setError(data.message || 'Login failed');
                return;
            }

            // ✅ Store auth flag (just temporary — better to use cookies/session in real apps)
            localStorage.setItem("allowAdmin", "true");
            router.push("/admin/dashboard");
        } catch (err) {
            setError("Something went wrong");
            console.error(err);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="rounded-md flex flex-col items-center px-10 py-10 mt-5 gap-5 border">
                <h2 className="text-2xl font-bold">Admin Login</h2>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Admin Username"
                    className="border border-black p-2 rounded-md w-full"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Admin Password"
                    className="border border-black p-2 rounded-md w-full"
                />

                <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Login
                </button>

                {error && <p className="text-red-600">{error}</p>}
            </div>
        </div>
    );
}
