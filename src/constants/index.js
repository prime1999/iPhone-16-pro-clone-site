import {
	camera1Img,
	camera2Img,
	camera3Img,
	cameracontrolImg,
	highlightImage1Img,
	highlightImage2Img,
	highlightImage3Img,
	highlightImage4Img,
	highlightImage5Img,
	highlightImage6Img,
	model1Img,
	model2Img,
	model3Img,
	model4Img,
	model5Img,
	zoom1Img,
	zoom2Img,
	zoom3Img,
	zoom4Img,
	zoom5Img,
	zoom6Img,
	zoomMarcoImg,
} from "../utils";

export const navList = ["Mac", "iPad", "iPhone", "Support", "Where to Buy"];

export const hightlights = [
	{
		id: 1,
		textLists: [
			"So fast. So fluid. Get a feel for",
			" the all-new Camera Control.",
		],
		video: highlightImage1Img,
	},
	{
		id: 2,
		textLists: [
			"4K 120 fps Dolby Vision.",
			"4 studio-quality mics.",
			"A Pro studio in your pocket.",
		],
		video: highlightImage2Img,
	},
	{
		id: 3,
		textLists: [
			"Our thinnest borders yet — for",
			"even larger displays. Brilliant.",
		],
		video: highlightImage3Img,
	},
	{
		id: 4,
		textLists: [
			"All-new A18 Pro chip. Unrivalled",
			"performance. Unprecedented",
			"efficiency.",
		],
		video: highlightImage4Img,
	},
	{
		id: 5,
		textLists: ["A huge leap in battery life.", "Game on."],
		video: highlightImage5Img,
	},
	{
		id: 6,
		textLists: ["iOS 18. Home to all-new", "personalisation."],
		video: highlightImage6Img,
	},
];

export const modelSlides = [
	{
		id: 1,
		text: "6.3” iPhone 16 Pro1 in four colours",
		img: model1Img,
		type: "mixed",
	},
	{
		id: 2,
		text: "6.9” iPhone 16 Pro Max1 & 6.3” iPhone 16 Pro1 in Black Titanium",
		img: model2Img,
		type: "black",
	},
	{
		id: 3,
		text: "6.9” iPhone 16 Pro Max1 & 6.3” iPhone 16 Pro1 in White Titanium",
		img: model3Img,
		type: "white",
	},
	{
		id: 4,
		text: "6.9” iPhone 16 Pro Max1 & 6.3” iPhone 16 Pro1 in Natural Titanium",
		img: model4Img,
		type: "natural",
	},
	{
		id: 5,
		text: "6.9” iPhone 16 Pro Max1 & 6.3” iPhone 16 Pro1 in Desert Titanium",
		img: model5Img,
		type: "desert",
	},
];

export const cameraControlSlides = [
	{
		id: 1,
		text: ["In video mode,", "click to start recording."],
		img: camera1Img,
	},
	{
		id: 2,
		text: [
			"Click to launch the Camera app. Click again to",
			"instantly take a photo.",
		],
		img: camera2Img,
	},
	{
		id: 1,
		text: ["A light press ", "opens controls like zoom."],
		img: camera3Img,
	},
	{
		id: 1,
		text: [
			"With a double light press, you can",
			"select another camera setting.",
			"Then slide to adjust that setting.",
		],
		img: cameracontrolImg,
	},
];

export const zoomSlides = [
	{
		id: 1,
		img: zoomMarcoImg,
		label: "marco",
		text: ["0.5x", "Macro"],
	},
	{
		id: 2,
		img: zoom1Img,
		label: "13mm",
		text: ["0.5x", "Ultra Wide"],
	},
	{
		id: 3,
		img: zoom2Img,
		label: "24mm",
		text: ["1x", "Fusion 24mm"],
	},
	{
		id: 4,
		img: zoom3Img,
		label: "28mm",
		text: ["1.2x", "Fusion 28mm"],
	},
	{
		id: 5,
		img: zoom4Img,
		label: "35mm",
		text: ["1.5x", "Fusion 35mm"],
	},
	{
		id: 6,
		img: zoom5Img,
		label: "48mm",
		text: ["2x", "Telephoto"],
	},
	{
		id: 7,
		img: zoom6Img,
		label: "120mm",
		text: ["5x", "Telephoto"],
	},
];
