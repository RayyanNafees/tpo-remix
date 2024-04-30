import nodemailer from "nodemailer";

export const sendOTPByMail = async (email, otp) => {
  // Nodemailer function starts

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,

    secure: false, // true for 465, false for other ports
    // requireTLS: true,
    service: "gmail",
    auth: {
      user: process.env.NodeMailer_email,
      pass: process.env.NodeMailer_password,
    },
  });
  console.log('sending otp', otp)
  await transporter.sendMail({
    from: "GDSC",
    to: `${email}`,
    subject: "Email Verification",
    text: `Your Verification Code is ${otp}`,
  });

  // Nodemailer Function Ends
};
