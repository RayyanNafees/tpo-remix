import Logo from "../assets/logo.png";

const NavbarTop = () => {
	return (
		<header>
			<nav className="p-2 bg-white md:p-6 flex  sm:flex-row justify-between">
				<div className="flex flex-row">
					<div>
						<img
							src={Logo}
							className="w-[7.5vw] md:w-[6.5vw]"
							alt="img"
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
			</nav>
		</header>
	);
};

export default NavbarTop;
