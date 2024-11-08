// import React from "react"
// import {motion, useInView} from "framer-motion"
// import {useRef} from "react"

// const WhatWeDo = () => {
// 	// Reference to track when the component is in view
// 	const ref = useRef(null)
// 	const isInView = useInView(ref, {once: true, amount: 0.2})

// 	// Variants for animations
// 	const headingVariants = {
// 		hidden: {opacity: 0, y: 50},
// 		visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
// 	}

// 	const sectionVariants = {
// 		hidden: {opacity: 0},
// 		visible: {
// 			opacity: 1,
// 			transition: {duration: 0.6, delayChildren: 0.3, staggerChildren: 0.2},
// 		},
// 	}

// 	return (
// 		<section
// 			ref={ref}
// 			// rounded-lg m-6
// 			className="flex flex-col items-center justify-center py-10 sm:py-14 lg:py-16 px-4 bg-gradient-to-r from-blue-100 via-white to-purple-100 animate-gradient-x sm:m-10"
// 		>
// 			{/* Wrapping the section in motion.div for fade-in effect */}
// 			<motion.div
// 				initial="hidden"
// 				animate={isInView ? "visible" : "hidden"}
// 				variants={sectionVariants}
// 				className="w-full flex flex-col items-center"
// 			>
// 				{/* Tagline - centered */}
// 				<motion.div
// 					className="bg-purple-100 text-purple-600 font-semibold text-sm py-2 px-4 rounded-full shadow-md mb-4 flex justify-center items-center"
// 					variants={headingVariants}
// 				>
// 					A modern POS system
// 					<span className="ml-2">🌹</span>
// 				</motion.div>

// 				{/* Main Heading */}
// 				<motion.h1
// 					className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
// 					variants={headingVariants}
// 				>
// 					Finding a new way!
// 				</motion.h1>

// 				{/* Subheading */}
// 				<motion.h2
// 					className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600"
// 					variants={headingVariants}
// 				>
// 					What We Do?
// 				</motion.h2>
// 			</motion.div>
// 		</section>
// 	)
// }

// export default WhatWeDo

import React, {useRef} from "react"
import {motion, useInView} from "framer-motion"
import ProjectPlanning from "./ProjectPlanning"

const WhatWeDo = () => {
	// Reference to track when the component is in view
	const ref = useRef(null)
	const isInView = useInView(ref, {once: true, amount: 0.2})

	// Variants for animations
	const sectionVariants = {
		hidden: {opacity: 0, x: 50}, // Elements will come in from the right
		visible: {
			opacity: 1,
			x: 0,
			transition: {duration: 0.8, ease: "easeOut", staggerChildren: 0.2},
		},
	}

	const headingVariants = {
		hidden: {opacity: 0, x: 50}, // Animate heading from the right
		visible: {opacity: 1, x: 0, transition: {duration: 0.8, delay: 0.2}},
	}

	const subheadingVariants = {
		hidden: {opacity: 0, x: 50},
		visible: {opacity: 1, x: 0, transition: {duration: 0.8, delay: 0.4}},
	}

	return (
		<motion.section
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={sectionVariants}
			// from-blue-100 via-white to-purple-100
			className="flex flex-col items-center justify-center py-10 sm:py-14 lg:py-16 px-4 bg-gradient-to-r  dark:from-[#221634] dark:via-[#111827] dark:to-[#17124d]  animate-gradient-x"
		>
			{/* Wrapping the section in motion.div for fade-in effect */}
			<motion.div
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				variants={sectionVariants}
				className="w-full flex flex-col items-center"
			>
				{/* Tagline - centered */}
				{/* <motion.div
					className="bg-[#27A744] text-white font-semibold text-sm py-2 px-4 rounded-full shadow-md mb-4 flex justify-center items-center"
					variants={headingVariants}
				>
					A modern POS system
					
				</motion.div> */}

				{/* Main Heading */}
				<motion.h1
					className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
					variants={headingVariants}
				>
					Finding a new way!
				</motion.h1>

				{/* Subheading */}
				<motion.h2
					className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#27A744] dark:text-[#855BFF]"
					variants={subheadingVariants}
				>
					What We Do?
				</motion.h2>
			</motion.div>
			<ProjectPlanning />
		</motion.section>
	)
}

export default WhatWeDo
