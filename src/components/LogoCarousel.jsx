import React, {useEffect, useState} from "react"

const logos1 = [
	{src: "src/assets/CarouselLogos/Trusted By/intel.webp", alt: "Intel"},
	{
		src: "src/assets/CarouselLogos/Trusted By/dialog.webp",
		alt: "Dialog Semiconductor",
	},
	{src: "src/assets/CarouselLogos/Trusted By/ams.webp", alt: "AMS Osram"},
	{src: "src/assets/CarouselLogos/Trusted By/infineon.webp", alt: "Infineon"},
	{src: "src/assets/CarouselLogos/Trusted By/nxp.webp", alt: "NXP"},
]

const logos2 = [
	{src: "src/assets/CarouselLogos/Our Partners/anease.webp", alt: "Intel"},
	{
		src: "src/assets/CarouselLogos/Our Partners/pho_AT.webp",
		alt: "Dialog Semiconductor",
	},
	{
		src: "src/assets/CarouselLogos/Our Partners/photonic_hub.webp",
		alt: "AMS Osram",
	},
	{src: "src/assets/CarouselLogos/Our Partners/photonic.webp", alt: "Infineon"},
	{src: "src/assets/CarouselLogos/Our Partners/SALPS.webp", alt: "NXP"},
	{
		src: "src/assets/CarouselLogos/Our Partners/seperate_esabic.webp",
		alt: "NXP",
	},
	{src: "src/assets/CarouselLogos/Our Partners/SPG.webp", alt: "NXP"},
]

const logos3 = [
	{src: "src/assets/CarouselLogos/Supported/ffg_logo.webp", alt: "AMS Osram"},
	{src: "src/assets/CarouselLogos/Supported/SFG.webp", alt: "Infineon"},
	{src: "src/assets/CarouselLogos/Supported/wko.webp", alt: "NXP"},
]

const LogoCarousel = () => {
	// const [index, setIndex] = useState(0)
	// const [index2, setIndex2] = useState(0)
	// const [index3, setIndex3] = useState(0)

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setIndex((prevIndex) => (prevIndex + 1) % logos1.length)
	// 	}, 2000) // Change image every 2 seconds
	// 	const interval2 = setInterval(() => {
	// 		setIndex((prevIndex) => (prevIndex + 1) % logos2.length)
	// 	}, 2000)
	// 	// const interval3 = setInterval(() => {
	// 	// 	setIndex((prevIndex) => (prevIndex + 1) % logos3.length)
	// 	// }, 2000)

	// 	return () => clearInterval(interval) // Cleanup on component unmount
	// }, [])

	return (
		<>
			<div className="overflow-hidden py-8 bg-white dark:bg-[#111827]">
				<h2 className="text-center text-lg font-semibold text-gray-800 dark:text-white mb-4">
					Trusted By Customers Worldwide
				</h2>
				<div className="flex justify-center">
					<div className="flex space-x-8 animate-scroll">
						{logos1.map((logo, index) => (
							<img
								key={index}
								src={logo.src}
								alt={logo.alt}
								className="w-24 h-12 object-contain"
							/>
						))}
					</div>
				</div>
			</div>
			<div className="overflow-hidden py-8 bg-white dark:bg-[#111827]">
				<h2 className="text-center text-lg font-semibold text-gray-800 dark:text-white mb-4">
					Supported By
				</h2>
				<div className="flex justify-center">
					<div className="flex space-x-8 animate-scroll">
						{logos3.map((logo, index) => (
							<img
								key={index}
								src={logo.src}
								alt={logo.alt}
								className="w-24 h-12 object-contain"
							/>
						))}
					</div>
				</div>
			</div>
			<div className="overflow-hidden py-8 bg-white dark:bg-[#111827]">
				<h2 className="text-center text-lg font-semibold text-gray-800 dark:text-white mb-4">
					Our Partners
				</h2>
				<div className="flex justify-center">
					<div className="flex space-x-8 animate-scroll">
						{logos2.map((logo, index) => (
							<img
								key={index}
								src={logo.src}
								alt={logo.alt}
								className="w-24 h-12 object-contain"
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default LogoCarousel
