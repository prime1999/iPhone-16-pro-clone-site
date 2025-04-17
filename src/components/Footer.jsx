const Footer = () => {
	return (
		<footer className="w-10/12 mx-auto my-8">
			<hr className="border-1 border-gray-700 mb-4" />
			<div className="flex items-center justify-between">
				<div className="flex flex-col items-start justify-start gap-4 text-xs text-gray font-semibold lg:flex-row">
					<p>copyright © 2025 Apple Inc. All rights reserved.</p>
					<p className="text-slate-400">Terms of Use | Site Map</p>
				</div>
				<p className="text-slate-400 text-xs font-semibold hidden md:block">
					Nigeria
				</p>
			</div>
			<div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray">
				<p>Designed by</p>
				<a
					href="/"
					className="font-semibold text-slate-400 hover:text-slate-300"
				>
					Eminence
				</a>
			</div>
		</footer>
	);
};

export default Footer;
