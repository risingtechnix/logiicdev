/** @type {import('tailwindcss').Config} */
import IOT from "./src/assets/Solution/IOT_Pencil_draing.webp"
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			// animation: {
			// 	"gradient-x": "gradient-x 5s ease infinite",
			// },
			// keyframes: {
			// 	"gradient-x": {
			// 		"0%, 100%": {
			// 			"background-position": "0% 50%",
			// 		},
			// 		"50%": {
			// 			"background-position": "100% 50%",
			// 		},
			// 	},
			// },
			// backgroundSize: {
			// 	"200%": "200%",
			// },
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				iot: "url('./src/assets/Solution/IOT_Pencil_draing.webp')",
				// iot: IOT,
				energyEfficiency: "url('src/assets/Solution/Energy Efficiency.webp')",
				drones: "url('src/assets/Solution/drone.jpeg')",
				mobility: "url('src/assets/Solution/mobility_green.jpeg')",
			},
		},
	},
	plugins: [],
}
