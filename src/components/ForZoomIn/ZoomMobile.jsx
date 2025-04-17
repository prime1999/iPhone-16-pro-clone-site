import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { zoomSlides } from "../../constants";
import { mobileZoomImg, zoomCameraImg } from "../../utils";

const categories = ["marco", "13mm", "24mm", "28mm", "35mm", "48mm", "120mm"];

const ZoomMobile = () => {
	const [value, setValue] = useState("marco");
	const [pillPosition, setPillPosition] = useState({ left: 0, width: 0 });
	const [currentSlide, setCurrentSlide] = useState(zoomSlides[0]);
	const [scrollPosition, setScrollPosition] = useState(0);

	// Refs for tabs and container
	const tabRefs = useRef([]);
	const containerRef = useRef(null);

	// Layout effect to update pill position and slide
	useLayoutEffect(() => {
		const activeIndex = categories.indexOf(value);
		const activeTab = tabRefs.current[activeIndex];

		if (activeTab && containerRef.current) {
			setPillPosition({
				left: activeTab.offsetLeft,
				width: activeTab.offsetWidth,
			});

			const newSlide = zoomSlides.filter((slide) => slide.label === value);
			setCurrentSlide(newSlide[0]);
		}
	}, [value]);

	// GSAP Scroll Animations
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".sectionScroll-target",
				start: "top 10%",
				end: "+=400%",
				scrub: true,
				pin: true,
			},
		});

		tl.to(".scrollScale-target", {
			scale: 0.7,
			ease: "none",
			transformOrigin: "center center",
		});

		tl.to(
			".textScroll-target",
			{
				opacity: 0,
				y: -50,
				duration: 0.3,
				ease: "none",
			},
			"-=0.3"
		);

		tl.to(
			".textPosition",
			{
				marginTop:
					window.innerWidth < 760 ? "-250" : window.innerWidth < 1200 && "-270",
				duration: 0.3,
				ease: "none",
			},
			"-=0.3"
		);

		return () => {
			if (tl.scrollTrigger) tl.scrollTrigger.kill();
			tl.kill();
		};
	}, []);

	// Function to scroll tabs horizontally
	const scrollTabs = (direction) => {
		if (containerRef.current) {
			const scrollAmount = direction === "left" ? -150 : 150;
			containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
			setScrollPosition(
				direction === "left" ? scrollPosition - 150 : scrollPosition + 150
			);
		}
	};

	return (
		<section className="w-full bg-black lg:hidden">
			<div className="relative w-full flex flex-col items-center overflow-hidden sectionScroll-target">
				<img
					src={mobileZoomImg}
					alt="phone-zoom-image"
					className="w-full h-full object-cover scale-[3] mb-60 scrollScale-target"
				/>

				<div
					className="absolute top-0 left-0 w-full h-full flex justify-center items-start textScroll-target"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
				>
					<h1 className="text-white font-bold text-3xl w-10/12 mx-auto mt-72 md:text-7xl">
						New 48MP Ultra Wide camera. Vive la resolution.
					</h1>
				</div>
			</div>
			<div className="flex flex-col items-start justify-center w-10/12 mx-auto my-8 text-gray text-xl font-semibold textPosition">
				<p>
					iPhone 16 Pro adds a second 48MP camera to the Pro camera system. The
					new 48MP Ultra Wide camera has a more advanced quad-pixel sensor for
					super-high-resolution 48MP ProRAW and HEIF photos with autofocus.
				</p>
				<p>
					So you can{" "}
					<span className="text-white">
						capture a mesmerizing new level of detail
					</span>{" "}
					in macro photos and sweeping, wide-angle shots.
				</p>
			</div>
			<div className="relative w-11/12 mx-auto py-12">
				<div className="w-[90vw] mx-auto min-h-[250px] relative overflow-hidden md:w-[70vw] md:h-[400px]">
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
				<div className="relative flex items-center w-full max-w-screen-sm mx-auto px-4 mt-8 bg-gray-300 rounded-full md:w-[65vw] ">
					<button
						onClick={() => scrollTabs("left")}
						className={`p-2 bg-gray-300 text-white rounded-full z-10 mr-2 ${
							scrollPosition === 0 && "hidden"
						}`}
					>
						<IoIosArrowBack />
					</button>
					<div
						ref={containerRef}
						className="relative flex gap-2 p-2 text-white overflow-x-auto no-scrollbar w-full md:h-[70px]"
					>
						{/* Sliding pill indicator */}
						<motion.div
							className="absolute bg-white rounded-full z-0 h-[36px] md:h-[50px]"
							//style={{ height: 36 }}
							key={value}
							animate={{
								left: pillPosition.left,
								width: pillPosition.width,
								top: 10,
							}}
							transition={{ type: "spring", stiffness: 500, damping: 30 }}
						/>

						{categories.map((tab, i) => (
							<button
								key={tab}
								ref={(el) => (tabRefs.current[i] = el)}
								onClick={() => setValue(tab)}
								className={`relative z-10 px-6 py-2 rounded-full transition-all duration-200 ${
									value === tab ? "text-black" : "text-white"
								}`}
							>
								{tab}
							</button>
						))}
					</div>
					<button
						onClick={() => scrollTabs("right")}
						className={`p-2 bg-gray-300 text-white rounded-full z-10 ml-2 ${
							scrollPosition === 450 && "hidden"
						}`}
					>
						<IoIosArrowForward />
					</button>
				</div>
				<div className="mt-4 flex items-center justify-center">
					<h6 className="text-white text-center text-md font-semibold">
						{currentSlide.text[0]}
						<span className="ml-2 text-gray">{currentSlide.text[1]}</span>
					</h6>
				</div>
			</div>
			<div className="text-gray flex flex-col justify-center gap-6 items-center w-10/12 mx-auto mt-8 md:flex-row">
				<p className="text-xl font-semibold md:w-1/2">
					More zoom? Boom. Now you can shoot in 120mm with the 5x Telephoto
					camera on both Pro models and get{" "}
					<span className="text-white">
						sharper close-ups from further away.
					</span>
					With multiple framing options, it’s like having seven pro lenses in
					your pocket, everywhere you go.
				</p>
				<div>
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

export default ZoomMobile;
