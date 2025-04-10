import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { appleImg, searchImg } from "../utils";
import { navList } from "../constants";

const NavBar = () => {
	return (
		<nav className="w-11/12 mx-auto flex items-center justify-between pt-4 lg:w-8/12">
			<img src={appleImg} alt="apple image" />
			{navList.map((list) => (
				<p
					key={list}
					className="hidden text-xs text-gray-100 cursor-pointer hover:text-white lg:block"
				>
					{list}
				</p>
			))}
			<img src={searchImg} alt="search image" className="max-lg:hidden" />
			<div className="flex items-center gap-4 lg:hidden">
				<img src={searchImg} alt="search image" />
				<HiOutlineMenuAlt4 className="text-gray-600 text-lg" />
			</div>
		</nav>
	);
};

export default NavBar;
