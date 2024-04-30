import Logo from "../assets/logo.png";
import Lock from "../assets/lock.svg";
import Arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Dropdown from "./Menu";

const Header = () => {
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible);
	};
	const closeDropdown = (e) => {
		if (!e.target.matches(".dropbtn")) {
			setDropdownVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", closeDropdown);
		return () => {
			document.removeEventListener("click", closeDropdown);
		};
	}, []);

	const [showHamburger, setShowHamburger] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setShowHamburger(window.innerWidth < 640);
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{/* TOP BAR */}
			<div className="hidden lg:flex w-[100%] bg-[#2C3E50] text-[12px] py-2  text-white  justify-end items-center gap-6 pr-5">
				<button>Site Map</button>

				<div onClick={toggleDropdown}>
					<button className="dropbtn text-white text-center flex items-center gap-1">
						English <img src={Arrow} className="h-[10px]" alt="img" />
					</button>

					<div
						className={dropdownVisible ? "absolute bg-[#2C3E50] " : "hidden"}
					>
						<a href="js:void(0)" className="pt-[10px] px-4 block">
							Hindi
						</a>
						<a href="js:void(0)" className="py-1 px-4 block">
							Urdu
						</a>
						<a href="js:void(0)" className="py-1 px-4 block">
							English
						</a>
					</div>
				</div>
				<Link to="/login/admin">
					<button className="bg-[#A3D2CA] text-[#2C3E50] text-[10px] font-[500] px-3 py-[5px] rounded-[10px] flex gap-[2px]">
						<img src={Lock} alt="img" /> Admin login
					</button>
				</Link>
			</div>

			{/* MAIN HEADER */}
			<header className="p-2 bg-white md:p-1 flex  sm:flex-row justify-between items-center">
				<div className="flex">
					<div>
						<img
							src={Logo}
							className="w-[10vw] md:w-[6vw]"
							alt="img"
							alt="img"
						/>
					</div>
					<div className="pt-0 pl-2 flex flex-col md:pt-0 md:pl-4 text-customBlack">
						<span>
							<h1 className="text-[3.5vw] font-[700] md:text-[2.1vw]">
								Training and Placement Cell,
							</h1>
						</span>
						<span>
							<h3 className="text-[1.6vw] md:text-[1vw] font-[500]">
								Zakir Husain College of Engineering and Technology
							</h3>
							<h3 className="text-[1.6vw] md:text-[1vw] font-[500]">
								Aligarh Muslim University
							</h3>
						</span>
					</div>
				</div>
				{showHamburger && <Dropdown />}
			</header>
		</>
	);
};

export default Header;
