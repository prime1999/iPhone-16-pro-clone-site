import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { heroImg, smallHeroImg } from "../utils";
import OnScollNav from "./OnScollNav";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const navBarRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(
			navBarRef.current,
			{ y: -100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				ease: "power3.inOut",
				scrollTrigger: {
					trigger: ".trigger",
					start: "top end",
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);
	return (
		<>
			<section className="w-full relative">
				<div
					ref={navBarRef}
					className="fixed top-0 left-0 right-0 bg-gray-300 backdrop-blur-[10px] shadow-lg z-[999] border-b border-gray -translate-y-[100%]"
				>
					<OnScollNav />
				</div>
				<div className="flex items-center justify-center trigger">
					<img
						src={heroImg}
						alt="big phone image"
						className="py-12 max-sm:hidden"
					/>
					<div className="flex flex-col items-center justify-center py-24 md:hidden">
						<h1 className="text-white text-2xl font-semibold">IPhone 16 Pro</h1>
						<img src={smallHeroImg} alt="small phone image" className="w-72" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
