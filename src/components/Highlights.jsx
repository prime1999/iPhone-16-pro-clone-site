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
			transform: `translateX(${-100 * imgId}%)`,
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
	return (
		<section className="w-screen relative my-24 section">
			<div className="mx-auto">
				<h1 className="text-5xl text-white font-bold ml-12 py-8 heading">
					Get the highlights.
				</h1>
				<div className="flex items-center justify-between gap-4 overflow-x-auto my-12 no-scrollbar">
					{hightlights.map((slide, i) => (
						<div
							id="slider"
							key={i}
							className={`w-[85vw] h-[650px] shrink-0 rounded-3xl overflow-hidden relative ${
								i === 0 && "ml-16"
							}`}
						>
							<img
								src={slide.video}
								alt={`highlight ${slide.id}`}
								ref={(el) => (imageRef.current[i] = el)}
								className="w-full h-full"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="sticky bottom-5 left-[20%] translate-x-[40%]">
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
