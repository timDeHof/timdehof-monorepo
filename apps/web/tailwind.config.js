/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				generalsans: ["General Sans", "sans-serif"],
			},
			colors: {
				black: {
					DEFAULT: "#000",
					100: "#010103",
					200: "#0E0E10",
					300: "#1C1C21",
					500: "#3A3A49",
					600: "#1A1A1A",
				},
				white: {
					DEFAULT: "#FFFFFF",
					800: "#E4E4E6",
					700: "#D6D9E9",
					600: "#AFB0B6",
					500: "#62646C",
				},
			},
			backgroundImage: {
				terminal: "url('/assets/terminal.png')",
			},
			backgroundColor: {
				grid: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			},
			animation: {
				"scroll-left": "scroll-left 15s linear infinite",
				"scroll-right": "scroll-right 15s linear infinite",
			},
			keyframes: {
				"scroll-left": {
					"0%": { transform: "translateX(-50%)" },
					"100%": { transform: "translateX(0)" },
				},
				"scroll-right": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
		},
	},
	plugins: [],
};
