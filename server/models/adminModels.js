import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    password: String,
    otp: String,
    role: { type: String, default: "admin" },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);



export default mongoose.model("Admin", adminSchema);
