const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
		colors:{
			turquoise:{
				DEFAULT: "#78E4CA"
			},
			white:{
				DEFAULT:"#FFF"
			}
		}
	},
	plugins: [],
};

module.exports = config;
