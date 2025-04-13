import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modelSlides } from "../constants";

const CloserLook = () => {
	const [selected, setSelected] = useState("mixed");
	const [showSelected, setShowSelected] = useState(modelSlides[0]);
	const colours = ["#181919", "#D3D1CD", "#959086", "#977E6B"];

	useEffect(() => {
		if (selected) {
			const filteredSlides = modelSlides.filter(
				(slide) => slide.type === selected
			);
			// Update the state with filtered slide
			setShowSelected(filteredSlides[0]);
		}
	}, [selected]);
	return (
		<section className="w-screen bg-black py-32 text-white">
			<div className="flex flex-col w-full h-[100vh] my-2 lg:my-12">
				<h1 className="text-5xl font-bold px-12 max-md:px-4 max-md:text-3xl">
					Take a Closer Look.
				</h1>
				<div className="w-full flex  justify-center items-center relative h-[100vh] overflow-hidden">
					<AnimatePresence>
						<motion.img
							key={showSelected.type}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							src={showSelected.img}
							alt={showSelected.text}
							className="absolute w-full object-contain h-full max-sm:scale-[1.8] md:scale-[1.5] lg:scale-[1] sm:object-contain"
						/>
					</AnimatePresence>
				</div>
			</div>
			<div className="sticky bottom-10 z-[999]">
				<div className="w-full flex flex-col items-center justify-center">
					<span className="bg-white/5 backdrop-blur-md rounded-lg mb-4 text-sm font-semibold px-2 py-1">
						{showSelected?.text}
					</span>

					<div className="bg-gray-300 p-4 w-60 rounded-full justify-center backdrop-blur flex items-center gap-2">
						<span
							onClick={() => setSelected("mixed")}
							className={`w-8 h-8 rounded-[100%] bg-gradient-to-b from-[#181919] via-[#D3D1CD] to-[#977E6B] block cursor-pointer ${
								selected === "mixed" && "border border-white"
							}`}
						></span>
						<span
							onClick={() => setSelected("black")}
							className={`w-8 h-8 rounded-[100%] bg-[#181919] block cursor-pointer ${
								selected === "black" && "border border-white"
							}`}
						></span>
						<span
							onClick={() => setSelected("white")}
							className={`w-8 h-8 rounded-[100%] bg-[#D3D1CD] block cursor-pointer ${
								selected === "white" && "border border-white"
							}`}
						></span>
						<span
							onClick={() => setSelected("natural")}
							className={`w-8 h-8 rounded-[100%] bg-[#959086] block cursor-pointer ${
								selected === "natural" && "border border-white"
							}`}
						></span>
						<span
							onClick={() => setSelected("desert")}
							className={`w-8 h-8 rounded-[100%] bg-[#977E6B] block cursor-pointer ${
								selected === "desert" && "border border-white"
							}`}
						></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CloserLook;
