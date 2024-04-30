import Logo from "../../assets/logo.png";
import HamburgerIcon from "../../assets/hamburgerIcon.svg";
import CloseIcon from "../../assets/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarTopLogin = () => {
	const [firstImg, secondImg] = useState(HamburgerIcon);

	const handleHamburger = () => {
		const newImg = firstImg === HamburgerIcon ? CloseIcon : HamburgerIcon;
		const navLink = document.querySelector(".signUpButton");

		navLink.classList.toggle("hidden");

		secondImg(newImg);
	};

	return (
		<header>
			<nav className="p-2 first-line:bg-white flex sm:flex-row justify-between">
				<div className="flex flex-row">
					<div>
						<img
							src={Logo}
							className="w-[7.5vw] md:w-[6.5vw]"
							alt="img"
						/>
					</div>
					<div className="pt-0 pl-2 flex flex-col md:pl-4 text-customBlack">
						<span>
							<h1 className="text-[2.4vw] font-[700] md:text-[2.2vw]">
								Training and Placement Cell
							</h1>
						</span>
						<span>
							<h3 className="text-[1.6vw] md:text-[1vw]">
								Zakir Husain College of Engineering and Technology
							</h3>
							<h3 className="text-[1.6vw] md:text-[1vw]">
								Aligarh Muslim University
							</h3>
						</span>
					</div>
				</div>
				<div className="text-right sm:block sm:align-center sm:justify-center sm:text-center">
					<ul className="flex text-[2vw] flex-col sm:flex-row pt-[2vw] sm:pr-[2vw] sm:text-[1vw]">
						<li>
							<Link to="/">
								<button
									type="button"
									className="hidden h-[50%] text-center w-[8vw] sm:h-[3.5vw] md:block"
								>
									Home
								</button>
							</Link>
						</li>
						<li>
							<button type="button" onClick={handleHamburger}>
								<img
									src={firstImg}
									className="hamburgerImg block md:hidden w-[3.5vw] cursor-pointer"
									alt="img"
								/>
							</button>
						</li>
						<li>
							<Link to="/register">
								<button
									type="button"
									className="signUpButton hidden text-center md:block w-[8vw] h-[3.5vw] sm:box-shadow sm:rounded-lg sm:border-[0.1vw] sm:border-black sm:transition duration-300 ease-in-out hover:bg-customBlue hover:text-white"
								>
									Register
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavbarTopLogin;
