import React from "react"
import {ArrowRightIcon} from "@heroicons/react/24/solid"
import {AnimatePresence, motion} from "framer-motion"
import ContactPopup from "../Contact/ContactPopup"
import {useState} from "react"

const HeroSection = () => {
	// Animation Variants
	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

	const imageVariants = {
		hidden: {opacity: 0, scale: 0.8},
		visible: {opacity: 1, scale: 1, transition: {duration: 1}},
	}

	const buttonHover = {
		scale: 1.1,
		transition: {type: "spring", stiffness: 200, damping: 10},
	}

	// popup handlers
	const [isPopupOpen, setIsPopupOpen] = useState(false)

	const handleButtonClick = () => {
		setIsPopupOpen(true)
	}

	const handleClosePopup = () => {
		setIsPopupOpen(false)
	}

	return (
		<motion.section
			initial="hidden"
			animate="visible"
			className="bg-[#FAF9F5] dark:bg-[#D4F0F0] text-white p-6 sm:p-10 rounded-br-[800px] flex flex-col lg:flex-row items-center justify-between"
		>
			{/* Left side - Text content */}
			<motion.div
				variants={textVariants}
				className="w-full lg:w-1/2 mb-8 lg:mb-0"
			>
				<span className="bg-[#ffcc00] dark:bg-[#F0F8EE] dark:text-[#1D6362] text-black font-semibold px-3 py-1 rounded-full text-xs sm:text-sm inline-block mb-4">
					Landing - Support Desk
				</span>
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-black dark:text-[#1D1E25]">
					LOGIICDEV EXPLORE THE JOURNEY WITH CLIENT VISION TOWARDS A BETTER
					WORLD
				</h1>
				<p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 dark:text-[#7E8492]">
					We provide numerous solutions utilizing Power Electronics, Battery
					Management, High-Precision Fast Switching (Patented), and Simulation.
					Our solutions feature a unique combination of hardware, software, and
					firmware, all backed by built-in intellectual property.
				</p>
				<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
					{/* <button className="flex items-center space-x-2 bg-[#ffcc00] hover:bg-white hover:text-[#ffcc00] hover:border hover:border-[#ffcc00] text-black dark:bg-[#f0f8ee] dark:text-[#256867] dark:hover:border-[#256867] font-medium py-2 px-6 rounded-lg">
						<span>Get Started</span>
						<span className="bg-white text-purple-600 rounded-full p-1 w-6 h-6 flex justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</span>
					</button> */}
					<button
						onClick={handleButtonClick}
						className="flex items-center space-x-2 bg-[#ffcc00] hover:bg-white 
						hover:text-[#ffcc00] hover:border hover:border-[#ffcc00] text-black 
						dark:bg-[#f0f8ee] dark:text-[#256867] dark:hover:border-[#256867] font-medium py-2 px-6 rounded-lg transition duration-300"
					>
						<span>Get Started</span>
						<span className="bg-white text-purple-600 rounded-full p-1 w-6 h-6 flex justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</span>
					</button>
					{/* Render ContactPopup if isPopupOpen is true */}
					<AnimatePresence>
						{isPopupOpen && <ContactPopup onClose={handleClosePopup} />}
					</AnimatePresence>
					<button className="border border-[#ffcc00] text-[#000] dark:border-[#256867] dark:text-[#256867] dark:hover:bg-[#f0f8ee] font-medium py-2 px-6 rounded-lg hover:bg-gray-100">
						Learn More
					</button>
				</div>
			</motion.div>

			{/* Right side - Robot image */}
			<motion.div
				variants={imageVariants}
				className="w-full lg:w-1/2 flex justify-center lg:justify-end"
			>
				<img
					src="src/assets/robot-hero.png"
					alt="Robot"
					className="w-48 sm:w-64 lg:w-96 xl:w-[32rem] h-auto object-cover"
				/>
			</motion.div>
		</motion.section>
	)
}

export default HeroSection
