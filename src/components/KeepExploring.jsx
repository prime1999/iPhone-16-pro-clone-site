import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
	batteryImg,
	cameraImg,
	chipImg,
	colorImg,
	dualCameraImg,
	iphoneImg,
	iphoneProImg,
	proCameraImg,
	proChipImg,
	proColorImg,
} from "../utils";

const KeepExploring = () => {
	// for the heading animation
	useGSAP(() => {
		gsap.fromTo(
			".heading3",
			{ y: 40, opacity: 0 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power1.inOut",
				scrollTrigger: {
					trigger: ".section",
					toggleActions: "restart none none none",
				},
			}
		);
	}, []);
	return (
		<section className="my-48 w-full mx-auto lg:w-10/12">
			<div className="flex justify-between items-center max-lg:px-8 max-lg:flex-col max-lg:items-start heading3">
				<h1 className="text-white text-2xl font-semibold mb-2 md:text-4xl xl:text-5xl">
					Keep Exploring iPhone
				</h1>
				<button className="flex items-center text-blue hover:underline">
					Exploring all iPhone <IoIosArrowForward className="mt-1" />
				</button>
			</div>
			<div className="w-full rounded-3xl mt-16 lg:bg-black p-2 md:p-16 lg:p-24 xl:p-32">
				<div className="flex items-center justify-between">
					{/* iphone pro */}
					<div className="flex flex-col items-center justify-center">
						<motion.div
							className="max-w-[300px] cursor-pointer"
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.7, ease: "easeInOut" }}
						>
							<img src={iphoneProImg} alt="iPhone-16-pro-image" />
						</motion.div>
						<span className="w-[100px] mb-4">
							<img src={proColorImg} alt="color-palette" />
						</span>
						<div className="text-white text-center">
							<p className="text-orange-500 text-xs">New</p>
							<h4 className="mt-2 text-2xl font-semibold">IPhone 16 Pro</h4>
							<p className="mt-12 text-slate-200 font-semibold">
								Currently viewing
							</p>
						</div>
					</div>
					{/* iphone */}
					<div className="flex flex-col items-center justify-center">
						<motion.div
							className="max-w-[300px] cursor-pointer"
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.7, ease: "easeInOut" }}
						>
							<img src={iphoneImg} alt="iPhone-16-image" />
						</motion.div>
						<span className="w-[100px] mb-4">
							<img src={colorImg} alt="color-palette" />
						</span>
						<div className="text-white text-center">
							<p className="text-orange-500 text-xs">New</p>
							<h4 className="mt-2 text-2xl font-semibold">IPhone 16</h4>
							<button className="mt-12 text-slate-200 font-semibold rounded-full bg-blue py-2 px-4">
								Learn more
							</button>
						</div>
					</div>
				</div>
				<hr className="border-1 border-gray-700 mt-24" />
				<div className="flex items-center justify-center gap-4 mt-16 md:gap-36 xl:gap-48">
					<div className="flex flex-col gap-12 text-slate-200 text-xs">
						<div className="flex flex-col items-center justify-center gap-2">
							<div className="w-[100px]">
								<img src={proChipImg} alt="A18-pro-chip" />
							</div>
							<ul className="text-center">
								{["A18 Pro chip", "with 6‑core GPU"].map((list) => (
									<li key={list}>{list}</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col items-center justify-center gap-4">
							<div className="w-[70px]">
								<img src={cameraImg} alt="pro-camera-control" />
							</div>
							<p className="text-center">Camera Control</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-4">
							<div className="w-[100px]">
								<img src={proCameraImg} alt="pro-camera-control" />
							</div>
							<ul className="flex flex-col items-center justify-center gap-2 text-center">
								{[
									"Pro camera system",
									"Our most advanced 48MP Fusion camera",
									"5x Telephoto camera",
									"48MP Ultra Wide camera",
								].map((list) => (
									<li key={list}>{list}</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col items-center justify-center gap-4">
							<div className="w-[70px]">
								<img src={batteryImg} alt="pro-camera-control" />
							</div>
							<p className="text-center">Up to 33 hours video playback11</p>
						</div>
					</div>
					{/* right-side */}
					<div className="flex flex-col gap-12 text-slate-200 text-xs">
						<div className="flex flex-col items-center justify-center gap-2">
							<div className="w-[40px]">
								<img src={chipImg} alt="A18-chip" />
							</div>
							<ul className="text-center">
								{["A18 chip", "with 5‑core GPU"].map((list) => (
									<li key={list}>{list}</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col items-center justify-center gap-4">
							<div className="w-[70px]">
								<img src={cameraImg} alt="pro-camera-control" />
							</div>
							<p className="text-center">Camera Control</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-4">
							<div className="w-[100px]">
								<img src={dualCameraImg} alt="dual-camera" />
							</div>
							<ul className="flex flex-col items-center justify-center gap-2 text-center">
								{[
									"Advanced dual‑camera system",
									"Advanced 48MP Fusion camera",
									"2x Telephoto",
									"12MP Ultra Wide camera",
								].map((list) => (
									<li key={list}>{list}</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col items-center justify-center gap-4">
							<div className="w-[70px]">
								<img src={batteryImg} alt="pro-camera-control" />
							</div>
							<p className="text-center">Up to 27 hours video playback11</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default KeepExploring;
