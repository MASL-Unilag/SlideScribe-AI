export const Colors = {
	transparent: "transparent",
	current: "currentColor",
	purple: {
		50: "#EAE6FF",
		75: "#C0B6F2",
		100: "#998DD9",
		200: "#8777D9",
		300: "#6554C0",
		400: "#5243AA",
		500: "#403294",
	},
	neutral: {
		0: "#FFFFFF",
		10: "#FAFBFC",
		20: "#F8F8F9",
		30: "#EBECF0",
		40: "#DFE1E6",
		50: "#C1C7D0",
		60: "#B3BAC5",
		70: "#A5ADBA",
		80: "#97A0AF",
		90: "#8993A4",
		100: "#7A869A",
		200: "#6B778C",
		300: "#5E6C84",
		400: "#505F79",
		500: "#42526E",
		600: "#344563",
		700: "#253858",
		800: "#172B4D",
		900: "#061938",
	},
	teal: {
		50: "#E6FCFF",
		75: "#B3F5FF",
		100: "#79E2F2",
		200: "#00C7E6",
		300: "#00B8D9",
		400: "#00A3BF",
		500: "#008DA6",
	},
	red: {
		50: "#FFEBE6",
		75: "#FFBDAD",
		300: "#FF5630",
		400: "#DE350B",
		500: "#B92500",
	},
	green: {
		50: "#E3FCEF",
		75: "#ABF5D1",
		300: "#36B37E",
	},
	gray: {
		85: "#D9D9D9",
	},
	gradient: {
		start: "#1479FF",
		stop: "#8C33FF",
	},
};

/** @type {import('tailwindcss').Config} */
const tailwindConfig: import("tailwindcss").Config = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		colors: Colors,
		fontFamily: {
			sans: ['"Inter"'],
		},
		extend: {
			fontSize: {
				caption: ".75rem",
				body: ".875rem",
				title: "1.75rem",
				heading: "1.625rem",
				heading2: "1.125rem",
			},
			spacing: {
				h: "1.56rem",
			},
			width: {
				h: "71%",
				sh: "35%",
			},
			textDecoration: {
				none: "none",
			},
		},
	},
	plugins: [],
};

export default tailwindConfig;
