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
					<span className="bg-[#59cf75] text-white dark:bg-[#F0F8EE] dark:text-[#1D6362] text-sm font-medium px-3 py-1 rounded-full">
						Project Planning
					</span>
					<h2 className="text-4xl font-bold dark:text-white">
						Everything that matters to your success
					</h2>
					<p className="text-gray-600 dark:text-gray-300">
						Our goal is to create intelligent electronics for a connected world.
						At logicdev, we design battery management systems, AI-powered
						testing equipment, and FPGA solutions to meet the demands of green
						energy, efficient design, and responsible innovation in the
						industry.
					</p>
					<p className="text-gray-600 dark:text-gray-300">
						Whether you're developing ICs or systems, the broad portfolio of our
						offerings enables you to select the model that fits your needs.
					</p>
					<button className="flex items-center space-x-2 bg-[#02b153] hover:bg-white hover:text-[#02b153] hover:border hover:border-[#02b153] text-white dark:bg-[#f0f8ee] dark:text-[#256867] dark:hover:border-[#256867]  font-medium py-2 px-6 rounded-lg">
						<span>Start a Project</span>
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
