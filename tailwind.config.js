/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			body: ["Syne"],
			display: ["Syne"],
		},
		extend: {
			colors: {
				transparent: "transparent",
				dark: "#070707",
				off_dark: "#212121",
				off_light: "#BBBBBB",
				light: "#EEEEEE",
			},
		},
	},
	plugins: [],
};
