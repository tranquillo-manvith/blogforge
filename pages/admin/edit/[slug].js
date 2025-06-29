// pages/admin/edit/[slug].js
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Head from "next/head";
import toast from "react-hot-toast";
import DOMPurify from 'dompurify';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

    const res = await fetch(`${baseUrl}/api/posts/${slug}`);
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
        if (!title.trim()) {
            toast.error("Title cannot be empty.");
            return;
        }
        if (!DOMPurify.sanitize(content).replace(/<(.|\n)*?>/g, "").trim()) {
            toast.error("Content cannot be empty.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(`/api/posts/${post.slug}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content }),
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || "Failed to update post");
            }

            toast.success("Post Updated Successfully");
        } catch (error) {
            console.error("Update error:", error);
            toast.error(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
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
