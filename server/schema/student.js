import { z } from "zod";
import {  digits, imageValidator, pastDateValidator } from "./_validators.js";

const studentSchema = z.object({
	name: z.string(),
	enrollment: z.string().length(6).regex(/[A-Z0-9]{6}/),
	facultyNo: z.string().length(10).regex(/[A-Z0-9]{10}/),
	dob: pastDateValidator,
	father_name: z.string(),
	mother_name: z.string(),
	yearOfStudy: z.number().int().gt(1990).lte(new Date().getFullYear()),
	passingYear: z.number().int().gt(1990),
	department: z.string(),
	mainSubject: z.string(),
	hallOfResidence: z.string(),
	hostel: z.string(),
	roomNo: z.string().max(4),
	email: z.string().email(),
	phoneNo: digits(10) ,
	guardianPhoneNo: z.number(),
	adhaarNo: digits(4 * 3),
	nationality: z.string(),
	permanentAddress: z.string(),
	correspAddress: z.string(),
	domicileProvince: z.string(),
	avatar: imageValidator, // profile pic,
	sign: imageValidator,
	thumbImpression: imageValidator,
	resume: imageValidator,
	experience: z.string(),
	internships: z.string(),
});


export default studentSchema;
