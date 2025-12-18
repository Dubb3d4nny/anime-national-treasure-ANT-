import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // strong password requirement
    },
    avatar: {
      type: String,
      default: "", // URL to avatar image
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
