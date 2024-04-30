import Arrow from "../assets/arrow.png";
import Download from "../assets/download.png";
import { useState, useEffect, useRef } from "react";

const DropdownMenu = ({ visible, options }) => {
	const dropdownStyle =
		"h-[28.16px] border-b-[1.5px] border-b-slate-300 flex items-center pl-3 ";

	return (
		visible && (
			<div
				className={`dropdown w-[234px] bg-[#EDF7FDCC] shadow-2xl absolute top-[36px] text-black font-[400] text-[12px] leading-[14.63px] ${
					visible ? "show" : ""
				}`}
			>
				{options.map((option, index) => (
					<div
						key={index}
						className={`${dropdownStyle} ${
							option.label === "Downloads" ? "" : "hover:bg-slate-300/25"
						}`}
					>
						{option.label === "Downloads" ? (
							<span className="font-semibold flex items-center h-[28.16px]">
								Downloads
							</span>
						) : option.icon ? (
							<div className="flex items-center">
								<img src={Download} className="h-[12px] pr-1" alt="img" />
								<span className="flex items-center h-[28.16px]">
									{option.label}
								</span>
							</div>
						) : (
							<a href={option.href}>{option.label}</a>
						)}
					</div>
				))}
			</div>
		)
	);
};

const Navbar = () => {
	const [activeTab, setActiveTab] = useState("overview");
	const [showFirstDropdown, setShowFirstDropdown] = useState(false);
	const [showSecondDropdown, setShowSecondDropdown] = useState(false);
	const underline = "bg-[#A3D2CA] h-[3px] w-[38px] rounded-full mx-auto";

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.target.closest(".dropdown")) {
				setShowFirstDropdown(false);
				setShowSecondDropdown(false);
			}
		};

		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	const firstDropdownOptions = [
		{
			href: "https://www.amu.ac.in/about-us/history",
			label: "About ZHCET, AMU",
		},
		{ label: "Why recruit?" },
		{
			href: "https://api.amu.ac.in/storage//file/10182/file_management/1709358293.pdf",
			label: "Placement records",
		},
		{ label: "Past Recruiters" },
		{
			href: "https://www.amu.ac.in/training-and-placement/zhcet/staff-members",
			label: "Faculty & research",
		},
		{ label: "Beyond acedemics" },
		{ href: "https://www.amu.ac.in/miscellaneous/alumni", label: "Alumni" },
	];

	const secondDropdownOptions = [
		{ href: "#", label: "Facilities" },
		{ href: "#", label: "Procedure & policies" },
		{ href: "#", label: "TPO Calendar" },
		{ href: "#", label: "Past Recruiters" },
		{ href: "#", label: "Course Syllabus" },
		{ href: "#", label: "FAQ's" },
		{ href: "#", label: "Downloads", isHeader: true },
		{ href: "#", label: "Institute placement brochure", icon: Download },
		{ href: "#", label: "List of Courses", icon: Download },
		{ href: "#", label: "Job announcement form", icon: Download },
		{ href: "#", label: "Internship announcement form", icon: Download },
		{ href: "#", label: "Placement Policy", icon: Download },
		{ href: "#", label: "Internship Policy", icon: Download },
	];

	return (
		<>
			<div className=" w-[100%] bg-[#2C3E50]  text-white hidden sm:flex flex-col text-[13px]">
				<div className="bg-[#A3D2CA] h-[8px]"></div>

				<div className="flex justify-center items-center py-[13px] w-[100%] font-[500] gap-5">
					<div onClick={() => setActiveTab("overview")}>
						<span className="cursor-pointer">Overview</span>
						{activeTab === "overview" ? (
							<div className={underline}></div>
						) : (
							<div className="h-[4px] w-[48px] bg-transparent"></div>
						)}
					</div>

					<div
						onClick={() => {
							setActiveTab("whyRecruit");
							setShowFirstDropdown(!showFirstDropdown);
							if (showSecondDropdown) {
								setShowSecondDropdown(false);
							}
						}}
					>
						<div className="relative cursor-pointer">
							<div className="flex items-center gap-2">
								<span>Why Recruit?</span>
								<img src={Arrow} className="h-[15px]" alt="img" />
							</div>
							{activeTab === "whyRecruit" ? (
								<>
									<div className={underline}></div>
									<DropdownMenu
										visible={showFirstDropdown}
										options={firstDropdownOptions}
									/>
								</>
							) : (
								<div className="h-[4px] w-[48px] bg-transparent"></div>
							)}
						</div>
					</div>

					<div
						onClick={() => {
							setActiveTab("forRecruiters");
							setShowSecondDropdown(!showSecondDropdown);
							if (showFirstDropdown) {
								setShowFirstDropdown(false);
							}
						}}
					>
						<div className="relative cursor-pointer">
							<div className="flex items-center gap-2">
								<span>For Recruiters</span>
								<img src={Arrow} className="h-[15px]" alt="img" />
							</div>
							{activeTab === "forRecruiters" ? (
								<>
									<div className={underline}></div>
									<DropdownMenu
										visible={showSecondDropdown}
										options={secondDropdownOptions}
									/>
								</>
							) : (
								<div className="h-[4px] w-[48px] bg-transparent"></div>
							)}
						</div>
					</div>

					<span
						className="cursor-pointer"
						onClick={() => setActiveTab("contactUs")}
					>
						Contact Us
						{activeTab === "contactUs" ? (
							<div className={underline}></div>
						) : (
							<div className="h-[4px] w-[48px] bg-transparent"></div>
						)}
					</span>
				</div>
			</div>
		</>
	);
};

export default Navbar;
