import dbConnect from '@/lib/mongoose';
import Post from '@/models/Post';

export default async function handler(req, res) {
    console.log("Incoming request method:", req.method);

    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { title, content, slug } = req.body;

    console.log("Received data:", { title, content, slug });

    try {
        await dbConnect();
        console.log("Connected to DB");

        const post = await Post.create({ title, content, slug });

        console.log("Post created:", post);

        return res.status(201).json(post);
    } catch (error) {
        console.error('Create Post Error:', error); // KEEP THIS
        return res.status(500).json({
            message: "Server error",
            error: error.message,
            stack: error.stack,
        });
    }
}