/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			colors: {
				"soft-red": "hsl(5, 85%, 63%)",
				"soft-orange": "hsl(35, 77%, 62%)",
				"very-dark-blue": "hsl(240, 100%, 5%)",
			},
		},
	},
	plugins: [],
};
