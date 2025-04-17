import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { hightlights } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
	const imageRef = useRef([]);
	const imageSpanRef = useRef([]);
	const imageDivRef = useRef([]);
	const animRef = useRef(null);

	// statefor the slider playing progress (to keep track of the whole slider animation)
	const [sliderAnimation, setSliderAnimation] = useState({
		isPlaying: false,
		isEnd: false,
		isLastImg: false,
		imgId: 0,
		startPlay: false,
		stopPlay: false,
	});

	const { isPlaying, startPlay, isLastImg, imgId, isEnd, stopPlay } =
		sliderAnimation;

	useGSAP(() => {
		// slider animation to move the image out of the screen and bring the next image in
		gsap.to("#slider", {
			transform:
				window.innerWidth < 760
					? `translateX(${-105 * imgId}%)` // mobile
					: window.innerWidth < 1200
					? `translateX(${-102 * imgId}%)` // tablet
					: `translateX(${-100 * imgId}%)`, // laptop
			duration: 2,
			ease: "power2.inOut",
		});
		// slider animation to start the slider animation when it is in the view
		gsap.to("#slider", {
			scrollTrigger: {
				trigger: "#slider",
				toggleActions: "restart none none none",
			},
			// once the in view restart is complete this function should be called so the carousel and the other
			// slider animation will start
			onComplete: () => {
				setSliderAnimation((pre) => ({
					...pre,
					startPlay: true,
					isPlaying: true,
				}));
			},
		});
	}, [isEnd, imgId]);

	// for the heading animation
	useGSAP(() => {
		gsap.fromTo(
			".heading",
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

	// to animate the progress
	useEffect(() => {
		let currentProgress = 0;
		let startTime = performance.now();
		let span = imageSpanRef.current;

		if (span[imgId]) {
			// animation to move the indicator
			animRef.current = gsap.to(span[imgId], {
				onUpdate: () => {
					// get the progress of the video
					const progress = Math.ceil(animRef.current.progress() * 100);

					if (progress != currentProgress) {
						currentProgress = progress;

						// set the width of the progress bar
						gsap.to(imageDivRef.current[imgId], {
							width:
								window.innerWidth < 760
									? "10vw" // mobile
									: window.innerWidth < 1200
									? "10vw" // tablet
									: "4vw", // laptop
						});
						// set the background color of the progress bar
						gsap.to(span[imgId], {
							width: `${currentProgress}%`,
							backgroundColor: "white",
						});
					}
				},
				// when the video is ended, replace the progress bar with the indicator and change the
				// background color
				onComplete: () => {
					if (isPlaying) {
						gsap.to(imageDivRef.current[imgId], {
							width: "12px",
						});
						gsap.to(span[imgId], {
							backgroundColor: "#e2e8f0",
						});
						if (imgId !== 5) {
							handleProcess("image-end", imgId);
						} else {
							handleProcess("image-last");
						}
					}
				},
			});
			// restart  the progress animation when the image is back to the first image(once the image resets)
			if (imgId == 0) {
				animRef.current.restart();
			}
			// function to update the progress bar
			const animUpdate = () => {
				const now = performance.now();
				const elapsed = (now - startTime) / 1000;
				animRef.current?.progress(Math.min(elapsed / 5, 1));
			};
			if (isPlaying && !stopPlay) {
				// ticker to update the progress bar
				gsap.ticker.add(animUpdate);
				// cleanup on state change or unmount
				return () => gsap.ticker.remove(animUpdate);
			} else {
				// remove the ticker when the slider animation is paused (progress bar is stopped)
				gsap.ticker.remove(animUpdate);
			}
		}
	}, [startPlay, imgId, stopPlay]);

	// for when the play|pause|rest button is clicked, we check the argument and handle the slider animation
	// using the current state of the slider
	const handleProcess = (type, i) => {
		switch (type) {
			case "image-end":
				setSliderAnimation((prev) => ({ ...prev, isEnd: true, imgId: i + 1 }));
				break;
			case "image-last":
				setSliderAnimation((prev) => ({ ...prev, isLastImg: true }));
				break;
			case "image-reset":
				setSliderAnimation((prev) => ({ ...prev, imgId: 0, isLastImg: false }));
				break;
			case "image-play":
				if (animRef.current) {
					// resume the animation
					animRef.current.resume();
				}
				setSliderAnimation((prev) => ({
					...prev,
					isPlaying: !prev.isPlaying,
					stopPlay: false,
				}));
				break;
			case "image-pause":
				if (animRef.current) {
					// pause the animation
					animRef.current.pause();
				}
				setSliderAnimation((prev) => ({
					...prev,
					isPlaying: !prev.isPlaying,
					stopPlay: true,
				}));
				break;
			default:
				return sliderAnimation;
		}
	};

	// fucntion to make the clicked dots move to the img the represent
	const handleDotClick = (index) => {
		const lastIndex = imgId;
		// Kill existing animation
		if (animRef.current) {
			animRef.current.kill();
		}
		// If there was a previously active image (not the first click), reset its width and progress
		if (lastIndex !== index) {
			// Reset the width of the previous dot (lastIndex)
			gsap.to(imageDivRef.current[lastIndex], {
				width: "12px",
			});
			// Reset the progress bar width of the previous dot (lastIndex)
			gsap.to(imageSpanRef.current[lastIndex], {
				width: "0%", // Reset progress
				backgroundColor: "#e2e8f0", // Reset color
			});
		}

		// Update state to navigate and play
		setSliderAnimation((prev) => ({
			...prev,
			imgId: index,
			isPlaying: true,
			stopPlay: false,
			isLastImg: index === hightlights.length - 1,
			startPlay: true,
		}));
	};

	return (
		<section className="relative my-24 section">
			<div className="relative mx-auto">
				<h1 className="text-2xl lg:text-5xl text-white font-bold ml-12 py-2 lg:py-8 heading">
					Get the highlights.
				</h1>
				<div className="flex items-center justify-between gap-4 overflow-x-auto my-12 no-scrollbar w-full relative">
					{hightlights.map((slide, i) => (
						<div
							id="slider"
							key={i}
							className={`xl:w-[85vw] h-[650px] max-sm:w-[85vw] max-sm:h-[500px] md:w-[80vw] lg:w-[90vw] bg-black shrink-0 rounded-3xl overflow-hidden flex items-center relative ${
								i === 0 && "max-sm:ml-8 ml-16"
							}`}
						>
							<div className="absolute top-10 left-10 lg:mt-8 max-md:top-10 max-md:left-[10%] z-10">
								{slide.textLists.map((list) => (
									<h4
										key={list}
										className="max-md:text-xl max-md:text-center text-2xl font-semibold text-white lg:text-3xl xl:text-4xl"
									>
										{list}
									</h4>
								))}
							</div>
							<img
								src={slide.video}
								alt={`highlight ${slide.id}`}
								ref={(el) => (imageRef.current[i] = el)}
								className="max-sm:w-[90vw] max-sm:scale-[1.6] md:scale-[1.2] max-sm:h-[30vh] md:h-[45vh] lg:w-full lg:h-full xl:scale-[1] md:bottom-10 md:absolute max-sm:absolute max-sm:bottom-12 xl:absolute xl:bottom-0 lg:relative lg:botom-0"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="sticky bottom-10 left-[30%] translate-x-[40%] max-sm:translate-x-[10%] z-[999]">
				<div className="flex items-center gap-4">
					<button className="rounded-full p-4 bg-gray-300 backdrop-blur">
						<img
							src={isLastImg ? replayImg : !isPlaying ? playImg : pauseImg}
							alt={`${isLastImg ? "replay" : !isPlaying ? "play" : "pause"}`}
							onClick={
								isLastImg
									? () => handleProcess("image-reset")
									: !isPlaying
									? () => handleProcess("image-play")
									: () => handleProcess("image-pause")
							}
						/>
					</button>
					<div className="relative w-60 flex items-center justify-center rounded-full bg-gray-300 backdrop-blur py-5 px-4">
						{hightlights.map((_, i) => (
							<span
								key={i}
								ref={(el) => (imageDivRef.current[i] = el)}
								onClick={() => handleDotClick(i)}
								className="w-3 h-3 relative bg-slate-200 mx-2 rounded-full cursor-pointer dot"
							>
								<span
									// to keep track of the playing progress
									ref={(el) => (imageSpanRef.current[i] = el)}
									className="w-full h-full rounded-full absolute"
								/>
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Highlights;
