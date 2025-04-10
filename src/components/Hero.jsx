import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { heroImg, smallHeroImg } from "../utils";
import OnScollNav from "./OnScollNav";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const navRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(
			navRef.current,
			{ y: -100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				ease: "power3.inOut",
				scrollTrigger: {
					trigger: ".trigger-section",
					start: "top end",
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);
	return (
		<>
			<div ref={navRef}>
				<OnScollNav />
			</div>
			<section className="flex items-center justify-center scroll-trigger">
				<img
					src={heroImg}
					alt="big phone image"
					className="py-12 max-sm:hidden"
				/>
				<div className="flex flex-col items-center justify-center py-24 md:hidden">
					<h1 className="text-white text-2xl font-semibold">IPhone 16 Pro</h1>
					<img src={smallHeroImg} alt="small phone image" className="w-72" />
				</div>
			</section>
		</>
	);
};

export default Hero;
