/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Arrow from "../assets/arrowblack.png";
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Why() {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex justify-center w-full   px-0 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ">
					<Menu.Item>
						{({ active }) => (
							<a
								href="js:void(0)"
								className={classNames(
									active ? "bg-gray-100 text-gray-900" : "text-gray-700",
									"flex items-center gap-1 px-4 py-2 text-sm",
								)}
							>
								Why Recruit? <img src={Arrow} className="h-[15px]" alt="img" />
							</a>
						)}
					</Menu.Item>
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
				<Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
									About ZHCET, AMU
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="js:void(0)"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block px-4 py-2 text-sm",
									)}
								>
									Why Recruit?
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="js:void(0)"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block px-4 py-2 text-sm",
									)}
								>
									Placement records
								</a>
							)}
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
									Past Recruiters
								</button>
							)}
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
									Faculty & Research
								</button>
							)}
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
									Beyond academics
								</button>
							)}
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
									Alumini
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
