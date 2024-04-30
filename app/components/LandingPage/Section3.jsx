import React, { useRef } from "react";
import { CompanyIcon } from "../../utils/data";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

const Section3 = () => {
	const containerRef = useRef(null);
	const scrollAmount = 100; // Adjust this value as needed
	const [leftArrow, setLeftArrow] = useState(true);
	const [rightArrow, setRightArrow] = useState(true);

	const handleScrollRight = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft += scrollAmount;
			console.log(containerRef.current.scrollLeft);
		}
	};

	const handleScrollLeft = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft -= scrollAmount;
			console.log(containerRef.current.scrollLeft);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center font1 my-[2vw]">
			<div className="text-[6vw] sm:text-[3vw] font-semibold">
				Past Recruiters
			</div>

			<div className="flex flex-row w-[100%] items-center justify-center">
				<button
					onClick={handleScrollLeft}
					className="w-[3vw] h-[10vw] rotate-180 flex justify-center items-center mt-[3.5vw]"
				>
					{" "}
					<img src={arrow} alt="img" />
				</button>

				<div
					ref={containerRef}
					style={{ scrollBehavior: "smooth" }}
					className="flex flex-row justify-center w-[100vw] items-center overflow-scroll scrollbar-hide "
				>
					<div className="flex flex-row mt-[3.5vw] justify-center items-center scroll">
						<div className="flex flex-row ">
							{CompanyIcon.map((data, index) => (
								<div
									key={index}
									className="bg-customBlue h-[15vw] w-[15vw] sm:h-[8.5vw] sm:w-[8.5vw] rounded-full items-center flex justify-center shadow3 mr-[6vw] p-[4.5vw] sm:p-[2vw]"
								>
									<img
										src={data.icon}
										className="w-[3.5vw]"
										alt="img"
										alt="img"
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				<button
					onClick={handleScrollRight}
					className="w-[3vw] h-[10vw] flex justify-center items-center mt-[3.5vw]"
				>
					<img src={arrow} alt="img" />
				</button>
			</div>
		</div>
	);
};

export default Section3;
{
	/* <div className='flex flex-row scroll mt-[3.5vw]'>
{CompanyIcon.map((data, index) => (
  <div key={index} className='bg-customBlue h-[15vw] w-[15vw] sm:h-[9vw] sm:w-[9vw] rounded-full items-center flex justify-center shadow3 mr-[6vw] p-[4.5vw] sm:p-[2vw]'>
    <img src={data.icon} alt="img"/>
  </div>
))}
</div>
<div className='flex flex-row scroll mt-[3.5vw]'>
{CompanyIcon.map((data, index) => (
  <div key={index} className='bg-customBlue h-[15vw] w-[15vw] sm:h-[9vw] sm:w-[9vw] rounded-full items-center flex justify-center shadow3 mr-[6vw] p-[4.5vw] sm:p-[2vw]'>
    <img src={data.icon} alt="img"/>
  </div>
))}
</div> */
}
