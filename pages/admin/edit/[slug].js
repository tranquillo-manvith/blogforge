// pages/admin/edit/[slug].js
import { useState } from "react";
import dynamic from "next/dynamic"; // ← YOU NEED THIS
import "react-quill/dist/quill.snow.css";
import Head from "next/head";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`);
    const data = await res.json();

    return {
        props: { post: data },
    };
}

export default function EditPost({ post }) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async () => {
        setLoading(true);
        const res = await fetch(`/api/posts/${post.slug}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content }),
        });
        const data = await res.json();
        setLoading(false);
        alert(data.message || "Updated successfully!");
    };

    return (
        <>
            <Head>
                <title>Edit {post.title}</title>
            </Head>
            <div className="p-6 max-w-2xl mx-auto">
                <h2 className="text-xl font-bold mb-4">Edit Post</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border w-full mb-4 p-2"
                />
                <ReactQuill value={content} onChange={setContent} />
                <button
                    onClick={handleUpdate}
                    className="px-6 py-1 mt-4 bg-green-100 text-black rounded-full hover:bg-green-500 border border-black"
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Update Post"}
                </button>
            </div>
        </>
    );
}
