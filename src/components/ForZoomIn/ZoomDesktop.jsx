import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { zoomSlides } from "../../constants";
import { phoneZoomImg, zoomCameraImg, zoomImg } from "../../utils";

const categories = ["marco", "13mm", "24mm", "28mm", "35mm", "48mm", "120mm"];

const ZoomDesktop = () => {
	const [value, setValue] = useState("marco");
	const [pillPosition, setPillPosition] = useState({ left: 0, width: 0 });
	const [currentSlide, setCurrentSlide] = useState(zoomSlides[0]);
	const containerRef = useRef(null);

	useEffect(() => {
		const activeTab = document.querySelector(`[data-tab="${value}"]`);
		if (activeTab && containerRef.current) {
			const containerRect = containerRef.current.getBoundingClientRect();
			const tabRect = activeTab.getBoundingClientRect();
			setPillPosition({
				left: tabRect.left - containerRect.left,
				width: tabRect.width,
			});
			const newSlide = zoomSlides.filter((slide) => slide.label === value);
			setCurrentSlide(newSlide[0]);
		}
	}, [value]);
	return (
		<section className="w-full bg-black hidden lg:block">
			<div
				className="relative w-full h-[700px] mb-8"
				style={{
					backgroundImage: `url(${zoomImg})`,
					backgroundSize: "110%",
					backgroundPosition: "center",
				}}
			>
				<div
					className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
				>
					<h1 className="text-white font-bold text-7xl w-9/12 mx-auto">
						New 48MP Ultra Wide camera. Vive la resolution.
					</h1>
				</div>
			</div>
			<div className="w-full flex items-center justify-center my-8">
				<img src={phoneZoomImg} alt="phone-zoom-image" className="w-[70vw]" />
			</div>
			<div className="flex items-start gap-32 justify-between w-8/12 mx-auto my-8 text-gray text-xl font-semibold">
				<p className="w-1/2">
					iPhone 16 Pro adds a second 48MP camera to the Pro camera system. The
					new 48MP Ultra Wide camera has a more advanced quad-pixel sensor for
					super-high-resolution 48MP ProRAW and HEIF photos with autofocus.
				</p>
				<p className="w-1/2">
					So you can{" "}
					<span className="text-white">
						capture a mesmerising new level of detail
					</span>{" "}
					in macro photos and sweeping, wide-angle shots.
				</p>
			</div>
			<div className="relative w-8/12 mx-auto py-12">
				<div className="w-[70vw] mx-auto min-h-[500px] relative overflow-hidden">
					<AnimatePresence>
						<motion.img
							key={currentSlide.id}
							src={currentSlide.img}
							alt={currentSlide.label}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.6, ease: "easeInOut" }}
							className="absolute top-0 left-0 w-full h-full object-cover"
						/>
					</AnimatePresence>
				</div>
				<div
					className="relative flex gap-4 bg-gray-300 rounded-full h-[55px] text-white w-max mx-auto mt-8"
					ref={containerRef}
				>
					{/* Sliding pill indicator */}
					<motion.div
						className="absolute bg-white rounded-full"
						style={{ height: "100%" }}
						animate={{
							left: pillPosition.left,
							width: pillPosition.width,
							top: 6, // leave some space from the top
							height: "calc(100% - 12px)",
						}}
						transition={{ type: "spring", stiffness: 500, damping: 30 }}
					/>

					{categories.map((tab) => (
						<button
							key={tab}
							data-tab={tab}
							onClick={() => setValue(tab)}
							className={`relative z-10 px-6 py-2 rounded-full transition-all duration-200 ${
								value === tab ? "text-black" : "text-white"
							}`}
						>
							{tab}
						</button>
					))}
				</div>
				<div className="mt-4 flex items-center justify-center">
					<h6 className="text-white text-center text-md font-semibold">
						{currentSlide.text[0]}
						<span className="ml-2 text-gray">{currentSlide.text[1]}</span>
					</h6>
				</div>
			</div>
			<div className="text-gray flex justify-center gap-6 items-center w-7/12 mx-auto">
				<p className="w-1/2 text-xl font-semibold">
					More zoom? Boom. Now you can shoot in 120mm with the 5x Telephoto
					camera on both Pro models and get{" "}
					<span className="text-white">
						sharper close-ups from further away.
					</span>
					With multiple framing options, it’s like having seven pro lenses in
					your pocket, everywhere you go.
				</p>
				<div className="w-1/2">
					<img
						src={zoomCameraImg}
						alt="camera-image"
						className="w-full object-cover"
					/>
				</div>
			</div>
			<div className="sticky bottom-10 flex justify-center">
				<div className="bg-gray-300 py-3 px-4 w-72 rounded-full backdrop-blur flex items-center justify-between">
					<p className="font-semibold text-white text-lg">
						Zoom in on 5x Telephoto
					</p>
					<span className="flex items-center justify-center bg-blue text-white font-bold rounded-full w-8 h-8 text-lg">
						<FaPlus className="z-10" />
					</span>
				</div>
			</div>
		</section>
	);
};

export default ZoomDesktop;
