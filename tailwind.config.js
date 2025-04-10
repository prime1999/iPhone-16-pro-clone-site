/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				blue: "#0071E3",
				gray: {
					DEFAULT: "#86868b",
					100: "#94928d",
					200: "#afafaf",
					300: "#42424570",
				},
				zinc: "#1D1D1F",
			},
		},
	},
	plugins: [],
};
