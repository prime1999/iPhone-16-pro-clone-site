import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaPlus } from "react-icons/fa6";
import { audioImg, horsevideoImg } from "../../utils";

gsap.registerPlugin(ScrollTrigger);

const ProMobileView = () => {
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".section-target",
				start: "top 10%",
				end: "+=400%",
				scrub: true,
				pin: true,
			},
		});

		tl.to(".scale-target", {
			scale: 1.2,
			ease: "none",
			transformOrigin: "center center",
		});

		// Then fade in the text
		tl.to(
			".text-target",
			{
				opacity: 0,
				y: -50,
				duration: 0.3,
				ease: "none",
			},
			"-=0.3"
		); // slightly overlaps with scale animation

		// Then fade in the text
		tl.to(
			".text",
			{
				marginTop:
					window.innerWidth < 760
						? "-250" // mobile
						: window.innerWidth < 1200 && "-270", // tablet

				duration: 0.3,
				ease: "none",
			},
			"-=0.3"
		); // slightly overlaps with scale animation

		return () => {
			if (tl.scrollTrigger) tl.scrollTrigger.kill();
			tl.kill();
		};
	}, []);

	return (
		<section className="w-full bg-black py-12 lg:hidden section-target">
			<div className="flex flex-col justify-center items-center">
				{/* ✅ Mobile & Tablet view only */}
				<div className="relative w-[80vw] flex flex-col items-center lg:hidden section-target">
					<img
						src={horsevideoImg}
						alt="horse-video-image"
						className="w-full h-full object-cover scale-[3] mb-60 scale-target"
					/>
					<h1 className="absolute top-[10%] opacity-1 text-3xl font-semibold w-8/12 mx-auto text-center text-white text-target">
						4K 120 fps Dolby Vision. Cinemasterful.
					</h1>
					<p className="-mt-4 text-center text-sm text-gray text">
						A herd of Icelandic horses, captured in stunning 4K 120 fps Dolby
						Vision
					</p>
				</div>
				<div className="w-10/12 mx-auto mt-12 lg:w-7/12 xl:w-8/12">
					<div className="w-full flex justify-between text-gray items-start flex-col gap-8 text-md">
						<p className="w-full lg:w-9/12 xl:w-1/2">
							iPhone 16 Pro takes video capture to a whole new level with{" "}
							<span className="font-bold text-white">
								4K 120 fps Dolby Vision{" "}
							</span>
							— our highest resolution and frame rate combo yet. Enabled by the
							new 48MP Fusion camera with second-generation quad-pixel sensor
							and our powerful A18 Pro chip, iPhone 16 Pro lets you record 4K
							120 fps Dolby Vision in video mode or slo-mo
						</p>
						<p className="text-5xl font-semibold max-lg:text-xl w-full">
							<span className="text-white">Highest-quality video</span> in a
							smartphone
						</p>
					</div>
					<div className="w-full text-gray mt-8 flex gap-32 justify-between items-start text-xl max-lg:flex-col max-lg:gap-8">
						<p className="w-full xl:w-1/2">
							And now you can{" "}
							<span className="font-bold text-white">
								adjust the playback speed after capture
							</span>{" "}
							in the redesigned Photos app, giving you greater editing
							capabilities. To add a dreamy quality to your shot, try out the
							new half-speed option. Or for a cinematic effect, slow it right
							down to 24 fps playback.
						</p>
						<p className="w-full xl:w-1/2">
							iPhone 16 Pro also provides{" "}
							<span className="font-bold text-white">
								a big leap in audio perform­ance{" "}
							</span>
							with four studio-quality mics for higher-quality recording. They
							provide a lower noise floor so you get more true-to-life sounds.
							New Spatial Audio capture makes your videos sound more immersive
							when listening with AirPods. And thanks to wind noise reduction,
							the audio quality is even clearer. Audio Mix.
						</p>
					</div>
				</div>
			</div>
			<div className="mt-32">
				<div className="flex flex-col items-start mx-auto w-10/12 justify-start text-white text-3xl font-semibold lg:w-full lg:items-center lg:justify-center lg:text-5xl xl:text-7xl lg:text-center">
					<h1 className="">Audio Mix.</h1>
					<h1>Make your voice heard.</h1>
					<p className="text-gray text-xl w-full lg:w-7/12 mt-16">
						Powered by advanced intelligence and Spatial Audio capture, Audio
						Mix lets you{" "}
						<span className="text-white">
							adjust the way voices sound in your videos
						</span>{" "}
						using three different voice options. Want to decrease background
						sound? Or just focus on the voices that are in frame? Simply select
						the mix and adjust intensity to get the sound you want after video
						capture.
					</p>
				</div>
				<div className="w-full flex justify-center mt-16">
					<img src={audioImg} alt="" />
				</div>
				<div className="w-9/12 mx-auto mt-8 flex justify-between items-start gap-8 max-md:flex-col max-lg:flex-wrap max-lg:gap-16 max-xl:justify-start">
					<div className="text-white w-full lg:w-1/3">
						<h6 className="text-xl font-semibold">In-Frame</h6>
						<hr className="my-4" />
						<p className="text-gray text-lg font-semibold">
							Only captures the voices of the people on camera, even if people
							off camera are talking during the recording.
						</p>
					</div>
					<div className="text-white w-full lg:w-1/3">
						<h6 className="text-xl font-semibold">Studio</h6>
						<hr className="my-4" />
						<p className="text-gray text-lg font-semibold">
							Makes voices sound like you’re recording in a professional studio
							equipped with sound-dampening walls. Great for vloggers or
							podcasters because the recording will sound like the mic is close
							to the subject’s mouth, even if it’s a few feet away.
						</p>
					</div>
					<div className="text-white w-full lg:w-1/3">
						<h6 className="text-xl font-semibold">Cinematic</h6>
						<hr className="my-4" />
						<p className="text-gray text-lg font-semibold">
							Captures all the voices around you and consolidates them towards
							the front of the screen — just like sound is formatted for films.
						</p>
					</div>
				</div>
			</div>
			<div className="sticky bottom-10 flex justify-center">
				<div className="bg-gray-300 py-3 px-4 w-60 rounded-full backdrop-blur flex items-center justify-between">
					<p className="font-semibold text-white text-lg">
						Geek out Pro videos
					</p>
					<span className="flex items-center justify-center bg-blue text-white font-bold rounded-full w-8 h-8 text-lg">
						<FaPlus className="z-10" />
					</span>
				</div>
			</div>
		</section>
	);
};

export default ProMobileView;
