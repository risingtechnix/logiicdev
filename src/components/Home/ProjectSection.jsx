import React, {useEffect} from "react"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

const ProjectSection = () => {
	// Set up animation controls
	const controls = useAnimation()
	const {ref, inView} = useInView({threshold: 0.2})

	// Trigger animation when component enters the viewport
	useEffect(() => {
		if (inView) {
			controls.start("visible")
		} else {
			controls.start("hidden")
		}
	}, [controls, inView])

	return (
		<section ref={ref} className="container mx-auto px-6 py-12">
			<div className="grid md:grid-cols-2 items-center gap-8">
				{/* Text Content */}
				<motion.div
					initial="hidden"
					animate={controls}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0, transition: {duration: 0.8}},
					}}
					className="space-y-6 pl-4 ml-6"
				>
					<span className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
						Project Planning
					</span>
					<h2 className="text-4xl font-bold text-gray-900">
						Everything that matters to your success
					</h2>
					<p className="text-gray-600">
						Our goal is to create intelligent electronics for a connected world.
						At logicdev, we design battery management systems, AI-powered
						testing equipment, and FPGA solutions to meet the demands of green
						energy, efficient design, and responsible innovation in the
						industry.
					</p>
					<p className="text-gray-600">
						Whether you're developing ICs or systems, the broad portfolio of our
						offerings enables you to select the model that fits your needs.
					</p>
					<motion.button
						whileHover={{scale: 1.05}}
						whileTap={{scale: 0.95}}
						className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
					>
						Start a Project &rarr;
					</motion.button>
				</motion.div>

				{/* Image */}
				<motion.div
					initial="hidden"
					animate={controls}
					variants={{
						hidden: {opacity: 0, x: 50},
						visible: {opacity: 1, x: 0, transition: {duration: 0.8}},
					}}
					className="relative"
				>
					<img
						src="src\assets\team.png" // Replace with your actual image path
						alt="Team at work"
						className="w-3/4 h-auto mx-auto rounded-lg shadow-lg"
					/>
					{/* Adjusted decorative element */}
					<div className="absolute -bottom-8 -right-[-100px] -z-10 bg-yellow-400 rounded-full w-20 h-20"></div>
				</motion.div>
			</div>
		</section>
	)
}

export default ProjectSection
