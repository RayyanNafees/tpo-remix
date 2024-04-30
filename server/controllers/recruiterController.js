import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendOTPByMail } from '../utils/sendOTPbyMail.js'

import RecruiterModel from '../models/recruiterModels.js'
import UserModel from '../models/userModels.js'

export const registerRecruiter = async (req, res, next) => {
  const { name, email, password, secret } = req.body

  if (!secret) {
    return res
      .status(404)
      .json({ success: false, message: 'Provide  Recruiter secret' })
  }
  if (secret !== process.env.recruiterSecret) {
    return res
      .status(404)
      .json({ success: false, message: 'Invalid Recruiter secret' })
  }
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  const otp = Math.floor(100000 + Math.random() * 900000).toString() // Generate 6-digit OTP

  const recruiter = new RecruiterModel({
    name,
    email,
    password: hashedPassword,
    otp,
  })
  await recruiter.save()

  sendOTPByMail(email, otp)

  res.status(200).json({
    success: true,
    message:
      'Recruiter registered successfully. verification otp has been  sent to your email. Please verify your email.',
  })
}

export const verifyRecruiterEmail = async (req, res, next) => {
  const { email, otp } = req.body
  const recruiter = await RecruiterModel.findOne({ email })
  if (!recruiter) {
    return res.status(404).json({ success: false, message: 'Recruiter not found' })
  }
  if (recruiter.otp !== otp) {
    return res.status(400).json({ success: false, message: 'Invalid OTP' })
  }

  recruiter.isVerified = true
  recruiter.otp = undefined
  await recruiter.save()
  res.status(200).json({
    success: true,
    message: 'OTP verified successfully.Recruiter registered successfully',
  })
}

export const loginRecruiter = async (req, res, next) => {
  const { email, password } = req.body
  const recruiter = await RecruiterModel.findOne({ email })
  if (!recruiter)
    return res.status(404).json({ success: false, message: 'Recruiter not found' })

  if (!recruiter.isVerified)
    return res
      .status(400)
      .json({ success: false, message: 'Recruiter email is not verified' })

  const isPasswordValid = bcrypt.compare(password, recruiter.password)
  if (!isPasswordValid)
    return res.status(401).json({ success: false, message: 'Invalid password' })

  const token = jwt.sign({ recruiterId: recruiter._id }, process.env.recruiterjwtSecret, {
    expiresIn: '1h',
  })
  res.status(200).json({
    success: true,
    message: 'Recruiter logged in successfully',
    authToken: token,
  })
}

export const approveUser = async (req, res, next) => {
  const user = await UserModel.findById(req.params.userId)

  if (!user)
    return res.status(404).json({ success: false, message: 'User not found' })

  if (!user.isVerified)
    return res
      .status(400)
      .json({ success: false, message: 'User email is not verified' })

  user.isApproved = true
  await user.save()
  res.status(200).json({
    success: true,
    message: 'User approved successfully',
  })
}
