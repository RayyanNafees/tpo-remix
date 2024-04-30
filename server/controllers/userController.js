import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendOTPByMail } from '../utils/sendOTPbyMail.js';
import {
  userSchema,
  verifyUserSchema,
  loginUserSchema,
} from '../schema/index.js';
import UserModel from '../models/userModels.js';

export const registerUser = async (req, res, next) => {
  const body = userSchema.safeParse(req.body);
  if (!body.success)
    return res.status(402).json({
      success: false,
      message: body.error.errors[0].message,
      data: body.error.errors,
    });
  const { name, username, email, password, facultyNo, enrollmentNo } =
    body.data;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .json({ success: false, message: 'User already exists' });
  }

  const user = new UserModel({
    name,
    username,
    email,
    password: hashedPassword,
    facultyNo,
    enrollmentNo,
    otp,
  });
  await user.save();
  console.log('Saving otp: ', otp);

  sendOTPByMail(email, otp);

  res.status(200).json({
    success: true,
    message:
      'User registered successfully. verification otp has been  sent to your email. Please verify your email.',
  });
};

export const verifyUserEmail = async (req, res, next) => {
  const body = verifyUserSchema.safeParse(req.body);
  if (!body.success)
    return res.status(402).json({
      success: false,
      message: body.error.errors[0].message,
      data: body.error.errors,
    });
  const { email, otp } = body.data
    
  const user = await UserModel.findOne({ email });
  console.log({ email, otp });
  console.log('Stored OTP', user.otp);
  if (!user)
    return res.status(404).json({ success: false, message: 'User not found' });

  if (user.otp !== otp)
    return res.status(400).json({ success: false, message: 'Invalid OTP' });

  user.isVerified = true;
  user.otp = undefined;
  await user.save();
  res.status(200).json({
    success: true,
    message: "OTP verified successfully. Please wait for admin's approval.",
  });
};

export const loginUser = async (req, res, next) => {
   const body = loginUserSchema.safeParse(req.body);
   if (!body.success)
     return res.status(402).json({
       success: false,
       message: body.error.errors[0].message,
       data: body.error.errors,
     });
  const { email, password } = body.data
  const user = await UserModel.findOne({ email });
  if (!user)
    return res.status(404).json({ success: false, message: 'User not found' });

  if (!user.isVerified)
    return res
      .status(400)
      .json({ success: false, message: 'User email is not verified' });
  if (!user.isApproved)
    return res
      .status(400)
      .json({ success: false, message: 'User is not Approved.' });

  const isPasswordValid = bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return res
      .status(401)
      .json({ success: false, message: 'Invalid password' });
  const token = jwt.sign({ userId: user._id }, process.env.jwtSecret, {
    expiresIn: '1h',
  });
  res.status(200).json({
    success: true,
    message: 'user logged in successfully',
    authToken: token,
  });
};

export const getsomething = async (req, res, next) => {
  return res.status(200).json({ success: true });
};
