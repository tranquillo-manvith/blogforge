// pages/blog/[slug].js

import Head from "next/head";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css"; // Reuse Quill's default CSS for styling
import { useEffect, useState } from "react";

export default function ViewPost() {
    const router = useRouter();
    const { slug } = router.query;

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/posts/${slug}`);
                if (!res.ok) throw new Error("Failed to fetch post");

                const data = await res.json();
                setPost(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) return <p className="text-center mt-10">Loading post...</p>;
    if (!post) return <p className="text-center mt-10">Post not found.</p>;

    const createdDate = new Date(post.createdAt).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    function stripHtml(html) {
        return html.replace(/<[^>]*>?/gm, '');
    }

    return (
        <>
            <Head>
                <title>{post.title} | BlogForge</title>
                <meta name="description" content={stripHtml(post.content).slice(0, 160)} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={stripHtml(post.content).slice(0, 160)} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`} />
            </Head>
            <main className="max-w-3xl mx-auto px-6 py-10">
                <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
                <p className="text-gray-500 text-sm mb-6">Posted on {createdDate}</p>
                <div
                    className="ql-editor prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </main>
        </>
    );
}
