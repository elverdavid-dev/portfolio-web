import tailwindcssMotion from 'tailwindcss-motion'

// grid svg
const svgToDataUri = require("mini-svg-data-uri");

const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"background": "#010409",
				"forenground": "#d1d5db"
			},
			animation: {
				spotlight: "spotlight 2s ease .75s 1 forwards",
				'background-shine': 'background-shine 2s linear infinite',
			},
			keyframes: {
				'background-shine': {
					from: {
						backgroundPosition: '0 0',
					},
					to: {
						backgroundPosition: '-200% 0',
					},
				},

				spotlight: {
					"0%": {
						opacity: 0,
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: 1,
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
			},
		},
	},
	plugins: [
		tailwindcssMotion,
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-grid": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					})
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		},
	],
}
