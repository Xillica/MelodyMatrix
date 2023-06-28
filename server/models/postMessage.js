import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  artist: String,
  creator: String,
  key: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
