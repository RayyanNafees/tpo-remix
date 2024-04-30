/* This Dropdown requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import HamburgerIcon from "../assets/hamburger.svg";
import Why from "./WhyrecruitMenu";
import For from "./ForrecruitersMenu";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
					<img src={HamburgerIcon} alt="img" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<a
									href="js:void(0)"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block px-4 py-2 text-sm",
									)}
								>
									Overview
								</a>
							)}
						</Menu.Item>

						<Menu.Item>
							<Why />
						</Menu.Item>

						<Menu.Item>
							<For />
						</Menu.Item>

						<Menu.Item>
							{({ active }) => (
								<button
									
									type="submit"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block w-full text-left px-4 py-2 text-sm",
									)}
								>
									Contact Us
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
