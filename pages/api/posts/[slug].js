import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";
import slugify from 'slugify';

export default async function handler(req, res) {
    await dbConnect();
    const { slug } = req.query;

    if (req.method === "GET") {
        try {
            const post = await Post.findOne({ slug });
            if (!post) {
                return res.status(404).json({ message: "post not found" });
            }
            res.status(200).json(post);
        } catch (err) {
            res.status(200).json({ message: "Error fetching post", error: err.message });
        }
    }

    else if (req.method === "PUT") {
        try {
            const { title, content } = req.body;
            const newSlug = slugify(title, { lower: true, strict: true });

            const updatedPost = await Post.findOneAndUpdate(
                { slug },
                { title, content, slug: newSlug },
                { new: true }
            );

            if (!updatedPost) return res.status(404).json({ message: "Post not found" });
            res.status(200).json({ message: "Post updated", post: updatedPost });
        } catch (err) {
            res.status(500).json({ message: "Error updating post", error: err.message });
        }
    }

    else if (req.method === "DELETE") {
        try {
            const deleted = await Post.findOneAndDelete({ slug });
            if (!deleted) return res.status(404).json({ message: "Post not found" });
            res.status(200).json({ message: "Post deleted successfully" });
        } catch (err) {
            res.status(500).json({ message: "Error deleting post", error: err.message });
        }
    }

    else {
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}