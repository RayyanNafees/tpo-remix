import Desk from "../../assets/mrtpo.png";
import { useEffect, useState } from "react";

const DirectorsDesk = () => {
	const [screenWidth, setScreenWidth] = useState(null);
	const [showImage, setShowImage] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	const longText =
		"Welcome to ZHCET's TPO Website! As the Director, I am thrilled to guide our students toward excellence. At ZHCET, we blend cutting-edge education with a commitment to holistic development, fostering a dynamic learning environment where innovation thrives and potential is realized to its fullest extent. Our mission extends beyond traditional academic boundaries, aiming to cultivate well-rounded individuals equipped with not only technical expertise but also essential life skills and a strong sense of social responsibility.";
	const truncatedText = isExpanded ? longText : `${longText.slice(0, 250)}...`;

	const handleReadMore = () => {
		setIsExpanded(!isExpanded);
	};

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
			setShowImage(window.innerWidth < 640); // Update showImage based on window width
		};

		handleResize(); // Call the handler once to set initial state

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="h-fit w-[100%] flex flex-row justify-around p-[4vw] sm:py-[4vw] bg-customBlue text-white">
			{!showImage && (
				<div className="w-[50%] items-center justify-center flex">
					<img src={Desk} className="w-[25vw] rounded-[8px]" alt="img" />
				</div>
			)}

			<div className="flex flex-col sm:w-[45%] justify-center  sm:items-start items-center">
				<h3 className="text-[7vw] sm:text-[3.2vw] text-center sm:text-left pb-[2vw] font-semibold ">
					From Director&apos;s Desk
				</h3>

				{showImage && (
					<div className="mb-[4vw]">
						<img src={Desk} className="w-[70vw] rounded-[1vw] " alt="img" />
					</div>
				)}

				<p className=" w-[85%] sm:w-[100%] text-center sm:text-left  text-[2.5vw] sm:text-[1.2vw] font-medium">
					{truncatedText}
				</p>
				<button
					type="button"
					onClick={handleReadMore}
					className="text-[2vw] sm:text-[1.2vw] font-semibold mt-[1vw]"
				>
					{isExpanded ? "Read Less" : "Read More"}
				</button>
			</div>
		</div>
	);
};

export default DirectorsDesk;
