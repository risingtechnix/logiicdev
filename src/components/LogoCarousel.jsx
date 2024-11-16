import React, {useEffect, useState} from "react"

// Logos 1 import
import Intel from "../assets/CarouselLogos/Trusted By/intel.webp"
import Dialog from "../assets/CarouselLogos/Trusted By/dialog.webp"
import AMS from "../assets/CarouselLogos/Trusted By/ams.webp"
import Infineon from "../assets/CarouselLogos/Trusted By/infineon.webp"
import NXP from "../assets/CarouselLogos/Trusted By/nxp.webp"

// Logos 2 import
import Anease from "../assets/CarouselLogos/Our Partners/anease.webp"
import PHO_AT from "../assets/CarouselLogos/Our Partners/pho_AT.webp"
import Photonic_Hub from "../assets/CarouselLogos/Our Partners/photonic_hub.webp"
import Photonic from "../assets/CarouselLogos/Our Partners/photonic.webp"
import SALPS from "../assets/CarouselLogos/Our Partners/SALPS.webp"
import Seperate_Esabic from "../assets/CarouselLogos/Our Partners/seperate_esabic.webp"
import SPG from "../assets/CarouselLogos/Our Partners/SPG.webp"
// logos 3 import
import FFG_LOGO from "../assets/CarouselLogos/Supported/ffg_logo.webp"
import SFG from "../assets/CarouselLogos/Supported/SFG.webp"
import WKO from "../assets/CarouselLogos/Supported/wko.webp"

const logos1 = [
	{src: Intel, alt: "Intel"},
	{
		src: Dialog,
		alt: "Dialog Semiconductor",
	},
	{src: AMS, alt: "AMS Osram"},
	{src: Infineon, alt: "Infineon"},
	{src: NXP, alt: "NXP"},
]

const logos2 = [
	{src: Anease, alt: "Intel"},
	{
		src: PHO_AT,
		alt: "Dialog Semiconductor",
	},
	{
		src: Photonic_Hub,
		alt: "AMS Osram",
	},
	{src: Photonic, alt: "Infineon"},
	{src: SALPS, alt: "NXP"},
	{
		src: Seperate_Esabic,
		alt: "NXP",
	},
	{src: SPG, alt: "NXP"},
]

const logos3 = [
	{src: FFG_LOGO, alt: "AMS Osram"},
	{src: SFG, alt: "Infineon"},
	{src: WKO, alt: "NXP"},
]

const LogoCarousel = () => {
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
