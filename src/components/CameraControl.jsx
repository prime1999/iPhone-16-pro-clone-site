import { useState } from "react";
import gsap from "gsap";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cameracontrolImg } from "../utils";
import { cameraControlSlides } from "../constants";

const CameraControl = () => {
	const [imgId, setImgId] = useState(1);

	const handleMove = (i) => {
		console.log({ imgId, index: i });
		setImgId(i);
		gsap.to("#divSlider", {
			transform:
				window.innerWidth < 760
					? `translateX(${-105 * i}%)` // mobile
					: window.innerWidth < 1200
					? `translateX(${-102 * i}%)` // tablet
					: `translateX(${-100 * i}%)`, // laptop
			duration: 1,
			ease: "power2.inOut",
		});
		console.log({ imgId, index: i });
	};
	return (
		<section className="relative w-full bg-black py-8">
			<div className="flex justify-center flex-col w-full items-center text-gray-100 text-5xl font-bold lg:text-7xl">
				<h3>Take total</h3>
				<h1 className="text-shadow text-center flex items-center justify-center text-white font-normal max-w-[600px]">
					Camera Control.
				</h1>
			</div>
			<div className="w-full mb-8 mt-20">
				<img
					src={cameracontrolImg}
					alt="camera-control"
					className="w-full object-cover"
				/>
			</div>
			<div className="text-gray w-9/12 mx-auto flex flex-col justify-between items-start gap-8 my-16 font-semibold text-xl md:flex-row md:gap-24 lg:gap-48">
				<p className="">
					Now you can take the perfect photo or video in record time. Camera
					Control gives you an
					<span className="font-bold text-white">
						{" "}
						easier way to quickly access camera tools.
					</span>{" "}
					Simply slide your finger to adjust camera functions like exposure or
					depth of field, and toggle through each lens or use digital zoom to
					frame your shot — just how you like it.
				</p>
				<p>
					Later this year, Camera Control will introduce a two-stage shutter
					that lets you{" "}
					<span className="text-white font-bold">
						{" "}
						automatically lock focus and exposure
					</span>{" "}
					with a light press — so you can reframe your shot without losing focus
					on your subject.
				</p>
			</div>
			<div className="w-full mx-auto flex items-center justify-between gap-4 overflow-x-auto my-12 no-scrollbar relative">
				{cameraControlSlides.map((slide, i) => (
					<div
						id="divSlider"
						key={i}
						className={`xl:w-[35vw] h-[650px] max-sm:w-[85vw] max-sm:h-[550px] md:w-[60vw] md:h-[690px] lg:w-[50vw] bg-black shrink-0 rounded-3xl overflow-hidden flex items-center relative ${
							i === 0 && "max-sm:ml-8 md:ml-32 lg:ml-48"
						}`}
					>
						<img
							src={slide.img}
							alt={`slide ${slide.id}`}
							className="absolute top-0 xl:w-full lg:h-[92vh] lg:w-[50vw] max-sm:h-[60vh] md:h-[55vh] object-cover scale-[1] bg-top rounded-3xl"
						/>
						<div className="absolute -bottom-0 w-10/12 h-[85px] mx-auto left-10 text-sm text-white z-[999] md:-bottom-0 lg:-bottom-10 xl:bottom-10">
							{slide.text.map((text, i) => (
								<span
									key={i}
									className={`text-[17px] mr-2 ${
										i === 1 && "text-white"
									} text-gray font-bold`}
								>
									{text}
								</span>
							))}
						</div>
					</div>
				))}
			</div>

			<div className="sticky bottom-10 flex justify-center">
				<div className="bg-gray-300 py-2 px-4 w-72 rounded-full backdrop-blur flex items-center justify-between">
					<p className="font-semibold text-white">
						Go deeper on camera control
					</p>
					<span className="flex items-center justify-center bg-blue text-white font-bold rounded-full w-8 h-8 text-lg">
						<FaPlus className="z-10" />
					</span>
				</div>
			</div>
			<div className="absolute right-10 bottom-[100px] text-white flex gap-4 text-2xl font-semibold">
				<button
					disabled={imgId === 0}
					onClick={() => handleMove(imgId - 1)}
					className={`bg-gray p-2 rounded-full text-center cursor-pointer ${
						imgId === 0 && "opacity-[0.5] pointer-events-none"
					}`}
				>
					<IoIosArrowBack className="cursor-pointer" />
				</button>
				<button
					disabled={imgId === 3}
					onClick={() => handleMove(imgId + 1)}
					className={`bg-gray p-2 rounded-full text-center cursor-pointer ${
						imgId === 3 && "opacity-[0.5] pointer-events-none"
					}`}
				>
					<IoIosArrowForward />
				</button>
			</div>
		</section>
	);
};

export default CameraControl;
