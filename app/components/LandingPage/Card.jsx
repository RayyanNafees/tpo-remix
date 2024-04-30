import React from "react";

const Card = ({ data }) => {
	return (
		<div className="flex flex-col text-customBlack items-center justify-center ">
			{/* roudn button */}
			<div className=" h-[15vw] w-[15vw] sm:h-[8vw] sm:w-[8vw] bg-customBlue rounded-full items-center flex justify-center p-[4vw] sm:p-[2.3vw]">
				<img src={data.icon} className="" alt="img" />
			</div>

			<div className="text-[3vw] sm:text-[1.8vw] font-semibold mt-[0.2vw]">
				{data.number}
			</div>

			<div className="text-[3vw] sm:text-[1.8vw] mt-[-0.7vw] font-light">
				{data.name}
			</div>
		</div>
	);
};

export default Card;
