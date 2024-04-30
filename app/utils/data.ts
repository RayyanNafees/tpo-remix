import department from "../assets/department.svg";
import faculty from "../assets/faculty.svg";
import staff from "../assets/staff.svg";
import student from "../assets/student.svg";
import publication from "../assets/publication.svg";

export const OurNumbers = [
	{
		id: 1,
		number: "14",
		name: "Department",
		icon: department,
	},
	{
		id: 2,
		number: "308+",
		name: "Faculties",
		icon: faculty,
	},
	{
		id: 3,
		number: "314+",
		name: "Staffs",
		icon: staff,
	},
	{
		id: 4,
		number: "7000+",
		name: "Students",
		icon: student,
	},
	{
		id: 5,
		number: "8000+",
		name: "Publications",
		icon: publication,
	},
];

import google from "../assets/google.svg";
import greater from "../assets//greater.svg";
import tcs from "../assets//tcs.svg";
import linkedin from "../assets//linkedin.svg";
import meta from "../assets//meta.svg";
import infosys from "../assets//infosys.svg";

// Returns a random item from an array
const choice = (arr: unknown[]) => arr[Math.floor(Math.random() * arr.length)]; 

export const CompanyIcon = Array(24)
	.fill({})
	.map((i) => ({
		icon: choice([google, greater, tcs, linkedin, meta, infosys]),
	}));

export const PlaceMentData = [
	{
		id: 1,
		year: 2020,
		highestctc: 25,
		placed: 420,
	},
	{
		id: 2,
		year: 2021,
		highestctc: 30,
		placed: 700,
	},
	{
		id: 3,
		year: 2022,
		highestctc: 44,
		placed: 820,
	},
	{
		id: 4,
		year: 2023,
		highestctc: 58,
		placed: 980,
	},
];

export const contactInfo = {
	mobile: "+91-571-2700920",
	email: "amupro@amu.ac.in",
	address: "Aligarh Muslim University Aligarh, Uttar Pradesh INDIA - 202002",
};

export const links = {
	brochure:
		"https://api.amu.ac.in/storage//file/10166/file_management/1707894084.pdf",
	location: "https://goo.gl/maps/Hjan5a5LtwjuaP1u5",
	rti: "https://www.amu.ac.in/miscellaneous/right-to-information-act",
	linkedin:
		"https://www.linkedin.com/in/training-and-placement-office-zhcet-amu-22a4061b9/",
	instagram: "https://www.instagram.com/tpozhcet/",
};