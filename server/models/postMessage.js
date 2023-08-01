import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  artist: String,
  name: String,
  creator: String,
  key: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  likes: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
