import React from "react";

const LongWhitebutton = ({ icon, content }) => {
	return (
		<div className="flex flex-row shadow2 items-center bg-[#F8F8FF] rounded-full py-[3vw] sm:py-[1vw] px-[4vw] sm:px-[2vw] w-[65vw] sm:w-[32vw] font1 text-customBlack ">
			<img
				src={icon}
				className="mr-[3vw] sm:mr-[2vw] h-[5vw] w-[5vw] sm:h-[3vw] sm:w-[3vw]"
				alt="img"
			/>
			<div className=" font-semibold text-[3.8vw] sm:text-[2vw]">{content}</div>
		</div>
	);
};

export default LongWhitebutton;
