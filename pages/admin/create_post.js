import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import toast from 'react-hot-toast';

// Quill needs dynamic import for Next.js SSR
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [slug, setSlug] = useState('');

    useEffect(() => {
        const generatedSlug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // Replace spaces/symbols with dash
            .replace(/(^-|-$)/g, ''); // Trim dashes
        setSlug(generatedSlug);
    }, [title]);

    const handleSubmit = async () => {
        if (!title.trim()) {
            toast.error("Title cannot be empty.");
            return;
        }
        if (!content.trim()) {
            toast.error("Content cannot be empty.");
            return;
        }
        const res = await fetch('/api/posts/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content, slug }),
        });
        // You’ll send this to backend later

        if (!res.ok) {
            const errorData = await res.json();
            toast.error(errorData.message || "Something went wrong. Try again.");
            return;
        }
        toast.success("Post Created!");
    };

    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl mt-5 mb-2">Create New Post</h1>

            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border border-black p-2 rounded-md"
            />

            <input
                type="text"
                value={slug}
                readOnly
                className="border border-black p-2 rounded-md bg-gray-100 text-gray-500"
                placeholder="Slug (auto-generated)"
            />

            <ReactQuill value={content} onChange={setContent} className="bg-white" />

            <div>
                <button
                    onClick={handleSubmit}
                    className="px-6 py-1 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black">
                    Create Post
                </button>
            </div>
        </div>
    );
}
