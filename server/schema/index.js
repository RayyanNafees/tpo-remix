import adminSchema from "./admin.js";
import studentSchema from "./student.js";
import userSchema from "./user.js";
import recruiterSchema from "./recruiter.js";
import jobSchema from "./job.js";
import {z} from 'zod'
import passwordValidator, { otpValidator } from "./_validators.js";
// import * as validators from './_validators'
export { jobSchema, recruiterSchema, userSchema, studentSchema, adminSchema, 
  // validators 
};

export const verifyUserSchema = z.object({
  email: z.string().email(),
  otp: otpValidator,
});
// export default validators

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: passwordValidator,
});

/**
 * Parses and send request based on schema
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("zod").ZodObjectDef} schema 
 */
export const parseBody = (req, res, schema) => {
   const body = schema.safeParse(req.body);
   if (!body.success)
     return res.status(402).json({
       success: false,
       message: body.error.errors[0].message,
       data: body.error.errors,
     });
  return body
}