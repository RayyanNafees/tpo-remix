import type { Config } from "tailwindcss";
export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/bgImg.jpeg')",
			},
			fontFamily: {
				montserrat: ["Montserrat"],
			},
			colors: {
				customBlack: "#232b2b",
				customBlue: "#2c3e50",
				customWhite: "#f8f8ff",
				customCyan: "#a3d2ca",
				customLightBlue: "#648db6",
			},
			screens: {
				vs: "250px",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
