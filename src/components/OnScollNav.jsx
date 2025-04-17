import { IoIosArrowDown } from "react-icons/io";

const OnScollNav = () => {
	return (
		<nav className="w-full h-full mx-auto px-4 py-2 flex items-center justify-between md:w-11/12 lg:w-9/12">
			<h1 className="font-semibold text-xl text-white">iPhone 16 Pro</h1>
			<div className="flex items-center justify-center gap-4 text-xs text-gray-200 font-semibold max-lg:hidden">
				<p className="cursor-pointer hover:text-white">Overview</p>
				<p className="cursor-pointer hover:text-white">Tech Specs</p>
				<button className="px-3 py-1 bg-blue rounded-full text-white">
					Find a Store
				</button>
			</div>
			<div className="flex items-center justify-center gap-4 text-xs text-gray-200 font-semibold lg:hidden">
				<IoIosArrowDown className="text-xl" />
				<button className="px-3 py-1 bg-blue rounded-full text-white">
					Find a Store
				</button>
			</div>
		</nav>
	);
};

export default OnScollNav;
