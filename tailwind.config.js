/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				anek: ['"Anek Latin"', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				...colors,
				main: '#050038',
				minor: '#FF9933',
				minorlight: '#FFE9D3',
				light: '#B9BEC7',
				bglight: '#F9F9F9',
				subheading: '#454545',
				gray: '#7C828D',
				graylight: '#F2F2F2',
				lightgreen: '#C2E7CF',
				darkgreen: '#1D482C',
				cream: "#FFE1C4"
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
