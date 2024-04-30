import { z } from "zod";
import { otpValidator, passwordValidator, roleValidator } from "./_validators.js";

const recruiterSchema = z.object({
	name: z.string(),
	username: z.string(),
	email: z.string().email(),
	password: passwordValidator,
	otp: otpValidator,
	role: roleValidator,
	isVerified: z.boolean().optional(),
});
export default recruiterSchema;
