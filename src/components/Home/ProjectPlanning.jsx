import React, {useRef} from "react"
import {motion, useInView} from "framer-motion"

const ProjectPlanning = () => {
	// Reference to track when the component is in view
	const ref = useRef(null)
	const isInView = useInView(ref, {once: true, amount: 0.2})

	// Animation Variants
	const sectionVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
	}

	const headingVariants = {
		hover: {scale: 1.05, transition: {yoyo: Infinity, duration: 1.5}},
	}

	const buttonHover = {
		hover: {
			scale: 1.1,
			transition: {type: "spring", stiffness: 200, damping: 10},
		},
	}

	return (
		<motion.section
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={sectionVariants}
			className="flex flex-col lg:flex-row items-center justify-between p-8 sm:p-16 sm:m-10"
		>
			{/* Left Side - Image */}
			<motion.div
				className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0"
				initial={{scale: 0.9, opacity: 0}}
				animate={{scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0}}
				transition={{duration: 0.6, ease: "easeInOut"}}
			>
				<img
					src="src/assets/ProjectPlanning.png" // Replace with your image path
					alt="Project Planning"
					className="w-64 sm:w-96 lg:w-[20rem] xl:w-[36rem] h-auto object-cover rounded-lg shadow-lg"
				/>
			</motion.div>

			{/* Right Side - Text Content */}
			<motion.div
				className="w-full lg:w-1/2 flex flex-col items-start lg:items-start text-left lg:pl-12"
				initial={{opacity: 0, x: 50}}
				animate={{opacity: isInView ? 1 : 0, x: isInView ? 0 : 50}}
				transition={{duration: 0.8, ease: "easeOut"}}
			>
				{/* Tag */}
				<motion.span
					className="bg-purple-100 text-purple-600 font-semibold px-3 py-1 rounded-full text-xs sm:text-sm inline-block mb-4"
					initial={{opacity: 0}}
					animate={{opacity: isInView ? 1 : 0}}
					transition={{delay: 0.5, duration: 0.6}}
				>
					Project Planning
				</motion.span>

				{/* Main Heading */}
				<motion.h1
					className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
					whileHover="hover"
					variants={headingVariants}
				>
					"Transforming Ideas into Efficient, Advanced Electronics."
				</motion.h1>

				{/* Subheading */}
				<motion.p
					className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 dark:text-gray-200"
					initial={{opacity: 0}}
					animate={{opacity: isInView ? 1 : 0}}
					transition={{delay: 0.7, duration: 0.6}}
				>
					At Logiicdev, we design and manufacture cutting-edge PCBs for a range
					of systems, providing custom solutions, simulations, and expert
					consulting to drive efficiency and innovation.
				</motion.p>

				{/* Button */}
				<motion.button
					className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-100 flex items-center justify-center"
					whileHover="hover"
					variants={buttonHover}
				>
					Start a Project <span className="ml-2">→</span>
				</motion.button>
			</motion.div>
		</motion.section>
	)
}

export default ProjectPlanning
