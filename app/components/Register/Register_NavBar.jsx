import React from "react";
import amu_logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Register_NavBar() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-2xl px-4 md:px-8 bg-white">
			<div className="flex items-center">
				<img
					src={amu_logo}
					className="w-16 md:w-[6rem] h-16 lg:h-[7.1rem] mr-2"
					alt="img"
				/>
				<div className="flex flex-col mt-2 md:mt-0">
					<div className="text-[1.25rem] md:text-2xl lg:text-4xl text-customBlack font-bold ">
						Training and Placement Cell,
					</div>
					<div className="text-sm md:text-[1rem] text-customBlack font-medium">
						Zakir Husain College Of Engineering And Technology
					</div>
					<div className="text-sm md:text-[1rem] text-customBlack font-medium">
						Aligarh Muslim University
					</div>
				</div>
			</div>
			<div className="flex mt-4 md:mt-0">
				<button
					type="button"
					className="w-20 md:w-28 lg:w-32 h-8 md:h-10 lg:h-12 text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] mr-4 md:mr-16 text-customBlack font-medium rounded-[10px] active:text-[0.97rem] hover:scale-[1.22rem]"
				>
					Back
				</button>
				<Link to="/login">
					<button
						type="button"
						className="justify-items-center items-center text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] w-20 md:w-28 lg:w-32 h-8 md:h-10 lg:h-12 py-2 px-4 text-white font-bold text-center bg-customBlue rounded-[10px] active:scale-[.98] hover:scale-[1.01] active:duration-75 transition-all"
					>
						Login
					</button>
				</Link>
			</div>
		</div>
	);
}
