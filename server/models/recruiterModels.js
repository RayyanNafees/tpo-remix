import mongoose from 'mongoose'

const recruiterSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    password: String,
    otp: String,
    role: { type: String, default: 'recruiter' },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model('Recruiter', recruiterSchema)
