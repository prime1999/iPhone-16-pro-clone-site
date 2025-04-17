const OnScollNav = () => {
	return (
		<nav className="w-9/12 h-full mx-auto px-4 py-2 flex items-center justify-between max-lg:hidden">
			<h1 className="font-semibold text-xl text-white">iPhone 16 Pro</h1>
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
