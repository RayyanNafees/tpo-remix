import call from "../assets/call.png";
import mail from "../assets/mail.png";
import Logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import linkedin from "../assets/linkedin.png";
import { contactInfo, links } from "../utils/data";

const Footer = () => {
	const footerItemStyle = " text-[1.5vw] sm:text-[0.9vw]";
	const footerSocialsStyle =
		"w-[5vw] h-[5vw] sm:w-[2.3vw] sm:h-[2.3vw] rounded-md cursor-pointer";

	const handleSocialClick = (url) => {
		window.open(url);
	};

	return (
		<div className="flex flex-col justify-center items-center w-[100vw] overflow-hidden">
			{/* Upper Footer */}
			<div className="flex flex-col justify-center items-center h-fit w-[100%] bg-customBlack text-customWhite px-[3vw]">
				<div className="flex flex-col sm:flex-row justify-between py-[2vw] w-[100%]">
					<div className="flex items-center  ">
						<img
							src={Logo}
							className="w-[17vw] sm:w-[9vw] sm:flex hidden "
							alt="img"
						/>

						<div className="flex flex-col mx-[2vw] sm:max-[1vw]">
							<h1 className="text-[6vw] sm:text-[1.75vw] font-semibold">
								Training and Placement Cell
							</h1>
							<div className="text-[3vw] sm:text-[1.25vw] sm:leading-[1.5vw]">
								Zakir Husain College Of Engineering And Technology <br />{" "}
								Aligarh Muslim University
							</div>
						</div>
					</div>

					<div className="flex flex-row gap-[3vw] sm:gap-[1vw] sm:ml-[0] sm:mt-[0] mt-[3vw] sm:justify-center sm:items-center">
						<img
							src={facebook}
							className={footerSocialsStyle}
							onClick={() => handleSocialClick("https://facebook.com")}
						/>
						<img
							src={x}
							className={footerSocialsStyle}
							onClick={() => handleSocialClick("https://x.com")}
						/>
						<img
							src={linkedin}
							className={footerSocialsStyle}
							onClick={() => handleSocialClick("https://linkedin.com")}
						/>
						<img
							src={facebook}
							className={footerSocialsStyle}
							onClick={() => handleSocialClick("https://facebook.com")}
						/>
					</div>
				</div>

				{/* border  */}
				<div className="w-[95vw] border-t-[1px] border-[#777676] justify-center items-center sm:mt-0 mt-[5vw]" />

				{/* border below */}
				<div className="flex flex-col sm:flex-row justify-between w-[100%] pb-[5vw] sm:pb-[2vw] sm:gap-0">
					<div className="w-[100%] sm:w-[40%] flex flex-col ml-[2vw] ">
						<h1 className="font-bold text-zinc-300 text-[5vw] sm:text-[2vw] my-[2vw]">
							Quick Links
						</h1>

						<div className="w-[50%] sm:w-[80%] flex sm:flex-row flex-col justify-between gap-[1vw] ">
							<div className="flex flex-col gap-[1.5vw]">
								<span className={footerItemStyle}>TPO Policies</span>
								<span className={footerItemStyle}>FAQ's</span>
								<span className={footerItemStyle}>Photo Gallery</span>
							</div>
							<div className="flex flex-col gap-[1.5vw]">
								<span className={footerItemStyle}>Contact us</span>
								<span className={footerItemStyle}>Academics</span>
								<span className={footerItemStyle}>RTI</span>
							</div>
							<div className="flex flex-col gap-[1.5vw]">
								<span className={footerItemStyle}>Brochures</span>
								<span className={footerItemStyle}>Resources</span>
								<span className={footerItemStyle}>Notices</span>
							</div>
						</div>
					</div>

					<div className="w-[100%] sm:w-[40%] flex flex-col sm:mt-[0] mt-[5vw] ml-[2vw]">
						<h1 className="font-bold text-zinc-300 text-[5vw] sm:text-[2vw] my-[2vw]">
							Contact Us
						</h1>

						<div className=" w-[70%] sm:w-[80%] flex sm:flex-row flex-col justify-between gap-[1vw]">
							<div className="flex flex-col gap-[3vw] sm:gap-[1.5vw]">
								<span className={footerItemStyle}>+91-XXXXXXXX</span>
								<span className={footerItemStyle}>tpo@zhcet.com</span>
								<span className={footerItemStyle}>tpo@zhcet.com</span>
							</div>
							<div className="flex flex-col gap-[3vw] sm:gap-[1.5vw] ">
								<span className={footerItemStyle}>
									1st-floor ,ZHCET building
								</span>
								<span className={footerItemStyle}>+91-XXXXXXXX</span>
								<span className={footerItemStyle}>tpo@zhcet.com</span>
								{/* <span className={footerItemStyle}>tpo@zhcet.com</span> */}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="flex flex-col justify-center items-center h-fit sm:gap-[0.25vw] py-[1vw] w-[100%] bg-[#2C3E50]">
				<span className=" text-[1.8vw] sm:text-[0.9vw] text-zinc-300">
					Website designed & developed by Team GDSC ZHCET | Credits
				</span>
				<span className=" text-[1.8vw] sm:text-[0.9vw] leading-[19.5px] text-zinc-300">
					Copyright © 2020 Aligarh Muslim University Aligarh, India.
				</span>
			</div>
		</div>
	);
};

export default Footer;
