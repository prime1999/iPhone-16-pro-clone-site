import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import CloserLook from "./components/CloserLook";
import CameraControl from "./components/CameraControl";
import GetProVideos from "./components/GetProVideos";
import ZoomIn from "./components/ZoomIn";
import Gaming from "./components/Gaming";
import KeepExploring from "./components/KeepExploring";
import Footer from "./components/Footer";

const App = () => {
	return (
		<main className="overflow-x-hidden">
			<div className="w-full bg-black">
				<NavBar />
				<Hero />
			</div>
			<Highlights />
			{/*	<CloserLook />
			<CameraControl />
			<GetProVideos />
			<ZoomIn />
			<Gaming />
			<KeepExploring />
			<Footer /> */}
		</main>
	);
};

export default App;
