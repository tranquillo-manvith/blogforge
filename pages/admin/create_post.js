import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

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

    const handleSubmit = () => {
        // You’ll send this to backend later
        console.log({ title, content, slug });
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
