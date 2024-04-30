import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendOTPByMail } from '../utils/sendOTPbyMail.js';
import { registerAdminSchema } from '../schema/admin.js';
import { verifyUserSchema, loginUserSchema } from '../schema/index.js';
import AdminModel from '../models/adminModels.js';
import UserModel from '../models/userModels.js';

export const registerAdmin = async (req, res, next) => {
  const body = registerAdminSchema.safeParse(req.body);
  if (!body.success)
    return res.status(402).json({
      success: false,
      message: body.error.errors[0].message,
      data: body.error.errors,
    });
  const { name, email, password } = body.data;

  const existingAdmin = await AdminModel.findOne({ email });
  if (existingAdmin) {
    return res
      .status(400)
      .json({ success: false, message: 'Admin already exists' });
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP

  const admin = new AdminModel({
    name,
    email,
    password: hashedPassword,
    otp,
  });
  await admin.save();

  sendOTPByMail(email, otp);

  res.status(200).json({
    success: true,
    message:
      'Admin registered successfully. verification otp has been  sent to your email. Please verify your email.',
  });
};

export const verifyAdminEmail = async (req, res, next) => {
  const body = verifyUserSchema.safeParse(req.body);
  if (!body.success)
    return res.status(402).json({
      success: false,
      message: body.error.errors[0].message,
      data: body.error.errors,
    });

  const { email, otp } = body.data;
  const admin = await AdminModel.findOne({ email });
  if (!admin) {
    return res.status(404).json({ success: false, message: 'Admin not found' });
  }
  if (admin.otp !== otp) {
    return res.status(400).json({ success: false, message: 'Invalid OTP' });
  }

  admin.isVerified = true;
  admin.otp = undefined;
  await admin.save();
  res.status(200).json({
    success: true,
    message: 'OTP verified successfully.Admin registered successfully',
  });
};

export const loginAdmin = async (req, res, next) => {
  const body = loginUserSchema.safeParse(req.body);
  if (!body.success)
    return res.status(402).json({
      success: false,
      message: body.error.errors[0].message,
      data: body.error.errors,
    });
  const { email, password } = body.data;
  const admin = await AdminModel.findOne({ email });
  if (!admin)
    return res.status(404).json({ success: false, message: 'Admin not found' });

  if (!admin.isVerified)
    return res
      .status(400)
      .json({ success: false, message: 'Admin email is not verified' });

  const isPasswordValid = bcrypt.compare(password, admin.password);
  if (!isPasswordValid)
    return res
      .status(401)
      .json({ success: false, message: 'Invalid password' });

  const token = jwt.sign({ adminId: admin._id }, process.env.adminjwtSecret, {
    expiresIn: '1h',
  });
  res.status(200).json({
    success: true,
    message: 'Admin logged in successfully',
    authToken: token,
  });
};

export const approveUser = async (req, res, next) => {
  const user = await UserModel.findById(req.params.userId);

  if (!user)
    return res.status(404).json({ success: false, message: 'User not found' });

  if (!user.isVerified)
    return res
      .status(400)
      .json({ success: false, message: 'User email is not verified' });

  user.isApproved = true;
  await user.save();
  res.status(200).json({
    success: true,
    message: 'User approved successfully',
  });
};
