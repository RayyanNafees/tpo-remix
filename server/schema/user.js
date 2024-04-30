import { z } from "zod";
import passwordValidator from "./_validators.js";
const userSchema = z.object({
	name: z.string(),
	username: z.string(),
	email: z.string().email(),
	password: passwordValidator, // TODO: Add password regex validation
	facultyNo: z.string().length(10).regex(/[A-z0-9]{10}/),
	enrollmentNo: z.string().length(6).regex(/[A-z0-9]{6}/),
	otp: z.union([
		z.string().length(6),
		z
			.number()
			.min(99999)
			.max(1000000), // 6-digit
	]).optional(),
	role: z
		.union([z.literal("user"), z.literal("recruiter"), z.literal("admin")])
		.default("user")
		.optional(),
	isVerified: z.boolean().optional(),
	isApproved: z.boolean().optional(),
});


export default userSchema;