import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    password2: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
