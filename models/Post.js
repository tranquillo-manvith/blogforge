import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
    },
    { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);