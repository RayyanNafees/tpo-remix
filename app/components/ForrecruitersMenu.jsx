/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Download from "../assets/download.png";
import Arrow from "../assets/arrowblack.png";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function For() {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex justify-center w-full px-0 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
					<Menu.Item>
						{({ active }) => (
							<a
								href="js:void(0)"
								className={classNames(
									active ? "bg-gray-100 text-gray-900" : "text-gray-700",
									"flex items-center gap-1 px-4 py-2 text-sm",
								)}
							>
								For Recruiters{" "}
								<img src={Arrow} className="h-[15px]" alt="img" />
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
									Facilities
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
									Procedure and Policies
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
									TPO Calendar
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
									Course Syllabus
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
									FAQ's
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							<h1 className="pl-4 font-[500] border-b border-b-1 ">
								Downloads
							</h1>
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									type="submit"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"w-full text-left px-4 py-2 text-sm flex items-center gap-1",
									)}
								>
									<img src={Download} className="h-[15px]" alt="img" />{" "}
									Institute placement brochure
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									type="submit"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"flex items-center gap-1 w-full text-left px-4 py-2 text-sm",
									)}
								>
									<img src={Download} className="h-[15px]" alt="img" /> List of
									Courses
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									type="submit"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"flex items-center gap-1 w-full text-left px-4 py-2 text-sm",
									)}
								>
									<img src={Download} className="h-[15px]" alt="img" /> Job
									announcement form
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									type="submit"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"flex items-center gap-1 w-full text-left px-4 py-2 text-sm",
									)}
								>
									<img src={Download} className="h-[15px]" alt="img" />{" "}
									Internship announcement form
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									type="submit"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"flex items-center gap-1 w-full text-left px-4 py-2 text-sm",
									)}
								>
									<img src={Download} className="h-[15px]" alt="img" />{" "}
									Placement Policy
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									type="submit"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"flex items-center gap-1 w-full text-left px-4 py-2 text-sm ",
									)}
								>
									<img src={Download} className="h-[15px]" alt="img" />{" "}
									Internship Policy
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
