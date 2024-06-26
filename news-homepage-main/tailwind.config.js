/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			colors: {
				"soft-red": "hsl(5, 85%, 63%)",
				"soft-orange": "hsl(35, 77%, 62%)",
				"off-white": "hsl(36, 100%, 99%)",
				"grayish-blue": "hsl(233, 8%, 50%)",
				"dark-grayish": "hsl(236, 13%, 42%)",
				"very-dark-blue": "hsl(240, 100%, 5%)",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"], // Add "sans-serif" as fallback
			},
		},
	},
	plugins: [],
};
