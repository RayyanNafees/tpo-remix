import { z } from "zod";
import passwordValidator, { otpValidator, roleValidator } from "./_validators.js";

const adminSchema = z.object({
	name: z.string(),
	username: z.string(),
	email: z.string().email(),
	password: passwordValidator,
	otp: otpValidator,
	role: roleValidator,
	isVerified: z.boolean().optional(),
});

export const registerAdminSchema = z.object({
	name: z.string(),
	secret: z.literal(process.env.adminSecret, {
		errorMap: () => ({ message: 'Invalid Admin secret' }),
	}),
	email: z.string().email(),
	password: passwordValidator
});


export default adminSchema;
