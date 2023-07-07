import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  artist: String,
  creator: String,
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User'
  // },
  key: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  likes: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
