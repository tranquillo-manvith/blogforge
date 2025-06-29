import dbConnect from '@/lib/mongoose';
import Post from '@/models/Post';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        console.log('🔧 Connecting to DB...');
        await dbConnect();
        console.log('✅ Connected');

        const posts = await Post.find().sort({ createdAt: -1 });
        console.log('📦 Fetched Posts:', posts);

        return res.status(200).json(posts);
    } catch (error) {
        console.error('❌ Fetch Posts Error:', error.message);
        console.error(error.stack); // <- 👈 THIS IS IMPORTANT
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}
