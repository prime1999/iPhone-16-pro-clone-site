const OnScollNav = () => {
	return (
		<nav className="w-full px-48 text-white py-2 fixed top-0 left-0 right-0 flex items-center justify-between bg-gray-300 backdrop-blur-[5px] shadow-lg z-[999] -translate-y-[100%] border-b border-gray">
			<h1 className="font-semibold text-xl">iPhone 16 Pro</h1>
			<div className="flex items-center justify-center gap-4 text-xs text-gray-200 font-semibold">
				<p className="cursor-pointer hover:text-white">Overview</p>
				<p className="cursor-pointer hover:text-white">Tech Specs</p>
				<button className="px-3 py-1 bg-blue rounded-full text-white">
					Find a Store
				</button>
			</div>
		</nav>
	);
};

export default OnScollNav;
