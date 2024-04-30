import React from "react";

const LongButton = ({ icon, content }) => {
	return (
		<div className=" w-fit flex flex-row bg-customBlue text-customWhite px-[2vw] py-[1vw] sm:py-[0.7vw] sm:px-[1vw] rounded-[1vw] object-contain items-center">
			<div>
				<img
					src={icon}
					className="sm:h-[1.5vw] sm:w-[1.5vw] h-[2.5vw] w-[2.5vw] mr-[1vw]"
					alt="img"
				/>
			</div>
			<div className="text-[2vw] sm:text-[1vw]">{content}</div>
		</div>
	);
};

export default LongButton;
