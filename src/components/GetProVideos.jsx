import { ProVideosDesktop, ProVideosMobile } from "./ProVideosView";

const GetProVideos = () => {
	return (
		<>
			{/* for mobile view */}
			<ProVideosMobile />
			{/* for Desktop view */}
			<ProVideosDesktop />
		</>
	);
};

export default GetProVideos;
