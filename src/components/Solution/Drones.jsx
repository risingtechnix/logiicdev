import React from "react"
import {motion} from "framer-motion"

const Drones = () => {
	//Animation
	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

	return (
		<div className="container mx-auto px-6 py-12 space-y-12">
			{/* Section 1: Header */}
			<div
				className="relative h-screen bg-cover bg-center bg-no-repeat "
				// style={{ backgroundColor: "Black" }}
			>
				<div className="relative flex flex-col items-center justify-center h-full text-center bg-drones text-white px-6 space-y-6">
					<div className="bg-black flex flex-col items-center gap-3 p-10 rounded-lg">
						<motion.h1
							initial={{opacity: 0, y: -50}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.8}}
							className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-black"
						>
							The Evolution and Impact of Drone Technology{" "}
						</motion.h1>
						<motion.p
							initial={{opacity: 0, y: 50}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.8, delay: 0.2}}
							className="text-lg md:text-xl max-w-3xl dark:text-gray-800"
						>
							Drones have rapidly evolved from novelties to essential tools
							across industries, revolutionizing operations with enhanced
							efficiency, accuracy, and safety. Logiicdev is at the forefront of
							this evolution, advancing drone technology through precision
							tracking.
						</motion.p>
					</div>
					{/* <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg"
          >
            Learn More
          </motion.button> */}
				</div>
			</div>

			{/* Section 2: Challenges and Opportunities */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{once: true}} // Trigger animation when card comes into view
				variants={textVariants}
				className="space-y-6"
			>
				<h2 className="text-2xl font-semibold text-blue-800 dark:text-white">
					Precision Tracking: Enhancing Accuracy and Efficiency
				</h2>
				<p className="text-gray-700 text-lg dark:text-gray-400">
					Precision tracking is vital for applications like asset management,
					environmental monitoring, and infrastructure inspection. Logiicdev’s
					drone solutions offer real-time, precise tracking, improving
					efficiency, security, and safety.
				</p>
			</motion.div>

			{/* Section 3: Innovative Solutions */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{once: true}} // Trigger animation when card comes into view
				variants={textVariants}
				className="space-y-6"
			>
				<h2 className="text-2xl font-semibold text-blue-800 dark:text-white">
					Innovative Applications Across Industries
				</h2>
				<p className="text-gray-700 text-lg dark:text-gray-400">
					Drones are widely adopted across sectors, including agriculture,
					construction, and public safety. Logiicdev’s technology supports
					activities like precision farming, site surveys, and emergency
					response with advanced data collection and analysis.
				</p>
				<ul className="space-y-4 pl-6 list-disc">
					<li className="text-gray-700 text-lg dark:text-gray-400">
						<strong>Agriculture:</strong> Create Drones monitor crop health and
						manage irrigation, optimizing yields.
					</li>
					<li className="text-gray-700 text-lg dark:text-gray-400">
						<strong>Construction:</strong> Drones conduct site surveys and
						safety inspections, providing real-time insights.
					</li>
					<li className="text-gray-700 text-lg dark:text-gray-400">
						<strong>Public Safety:</strong> Drones aid in search and rescue
						operations, ensuring efficient responses.
					</li>
				</ul>
			</motion.div>

			{/* Section 4: Delivering Sustainable Results */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{once: true}} // Trigger animation when card comes into view
				variants={textVariants}
				className="space-y-6"
			>
				<h2 className="text-2xl font-semibold text-blue-800 dark:text-white">
					Integrating Drones with IoT for Smarter Operations
				</h2>
				<p className="text-gray-700 text-lg dark:text-gray-400">
					IoT integration enhances drone capabilities, enabling real-time data
					sharing, automation, and sophisticated analytics. This synergy
					improves efficiency and provides actionable insights across various
					applications.
				</p>
			</motion.div>

			{/* Section 5: Logiicdev Role */}

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{once: true}} // Trigger animation when card comes into view
				variants={textVariants}
				className="space-y-6"
			>
				<h2 className="text-2xl font-semibold text-blue-800 dark:text-white">
					Logiicdev’s Role in Shaping the Future of Drones
				</h2>
				<p className="text-gray-700 text-lg dark:text-gray-400">
					Logiicdev drives innovation in drone technology through custom
					solutions, R&D, and global impact. Their expertise in precision
					tracking and IoT integration helps industries worldwide optimize
					operations, reduce costs, and improve safety.
				</p>
			</motion.div>

			{/* Section 6: Conclusion */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{once: true}} // Trigger animation when card comes into view
				variants={textVariants}
				className="space-y-6"
			>
				<h2 className="text-2xl font-semibold text-blue-800 dark:text-white">
					Conclusion
				</h2>
				<p className="text-gray-700 text-lg dark:text-gray-400">
					Drones are now essential in modern industry, and Logiicdev’s
					pioneering work is shaping the future of drone technology, offering
					unparalleled benefits across sectors.
				</p>
			</motion.div>
		</div>
	)
}

export default Drones
