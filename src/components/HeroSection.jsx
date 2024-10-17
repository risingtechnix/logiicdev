import React from "react"
import {ArrowRightIcon} from "@heroicons/react/24/solid"
import {motion} from "framer-motion"

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

	return (
		<motion.section
			initial="hidden"
			animate="visible"
			className="bg-black dark:bg-[#D4F0F0] text-white p-6 sm:p-10 rounded-lg flex flex-col lg:flex-row items-center justify-between  sm:m-10"
		>
			{/* Left side - Text content */}
			<motion.div
				variants={textVariants}
				className="w-full lg:w-1/2 mb-8 lg:mb-0"
			>
				<span className="bg-violet-300 dark:bg-[#F0F8EE] dark:text-[#1D6362] text-purple-700 font-semibold px-3 py-1 rounded-full text-xs sm:text-sm inline-block mb-4">
					Landing - Support Desk
				</span>
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight dark:text-[#1D1E25]">
					LOGIICDEV EXPLORE THE JOURNEY WITH CLIENT VISION TOWARDS A BETTER
					WORLD
				</h1>
				<p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 dark:text-[#7E8492]">
					We provide numerous solutions utilizing Power Electronics, Battery
					Management, High-Precision Fast Switching (Patented), and Simulation.
					Our solutions feature a unique combination of hardware, software, and
					firmware, all backed by built-in intellectual property.
				</p>
				<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
					{/* Get Started Button */}
					<motion.button
						whileHover={buttonHover}
						whileTap={{scale: 0.9}}
						className="bg-violet-700 dark:bg-[#007aff] dark:text-white text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover: transition duration-100 w-full sm:w-auto"
					>
						Get started
						<ArrowRightIcon className="h-5 w-5 ml-2" />
					</motion.button>
					{/* Learn More Button */}
					<motion.button
						whileHover={buttonHover}
						whileTap={{scale: 0.9}}
						className="border border-white dark:border-[#007aff] dark:text-[#007aff] px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black transition duration-100 w-full sm:w-auto"
					>
						Learn More
					</motion.button>
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
