import React from "react"
import {motion} from "framer-motion"
function Mobility() {
	//Animation
	const cardVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<div className="container mx-auto p-6 space-y-8">
			<div className="relative h-screen bg-cover bg-center bg-no-repeat">
				<div className="relative flex flex-col items-center justify-center h-full text-center bg-mobility text-white px-6 space-y-6">
					<div className="bg-black flex flex-col items-center gap-3 p-10 rounded-lg">
						<motion.h1
							initial={{opacity: 0, y: -50}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.8}}
							className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-black"
						>
							Mobility: Empowering Connectivity and Integration
						</motion.h1>
						<motion.p
							initial={{opacity: 0, y: 50}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.8, delay: 0.2}}
							className="text-lg md:text-xl max-w-3xl dark:text-gray-800"
						>
							Mobility is key to modern innovation, enabling seamless
							communication, data collection, and device integration. At
							Logiicdev, we focus on creating solutions that enhance
							connectivity, improve user experiences, and meet evolving business
							needs.
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

			{/* Cards */}
			{/* Section Wrapper */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Comprehensive IoT Solutions */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Seamless Platform Communication
					</h2>
					<h4 className="font-semibold text-blue-400">
						Logiicdev ensures smooth, efficient communication across various
						systems
					</h4>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong>Interoperability:</strong> Solutions work across multiple
							platforms, ensuring device compatibility.
						</li>
						<li className="dark:text-gray-400">
							<strong>Real-Time Connectivity:</strong> Devices stay connected,
							providing instant updates crucial for industries like logistics
							and healthcare.
						</li>
						<li className="dark:text-gray-400">
							<strong>Scalability::</strong> Our solutions grow with your
							business, allowing easy integration with additional platforms and
							devices.
						</li>
					</ul>
				</motion.div>

				{/* Remote Monitoring and Control */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Mobile Apps and Platforms
					</h2>
					<h4 className="font-semibold text-blue-400">
						Logiicdev specializes in developing mobile apps across platforms
					</h4>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong>Android (Kotlin) and iOS (Swift):</strong>Robust,
							user-friendly apps tailored to each platform. Cross-Platform
							Development: Using React Native and Flutter, we create apps that
							work seamlessly on both Android and iOS.
						</li>
						<li className="dark:text-gray-400">
							<strong>Custom Mobile Solutions:</strong> Tailored apps that meet
							specific business needs.
						</li>
					</ul>
				</motion.div>

				{/* Enhanced Security and Compliance */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Data Collection:
					</h2>
					<h4 className="font-semibold text-blue-400">
						Effective data collection is crucial. Logiicdev enables businesses
						to gather, analyze, and act on valuable data
					</h4>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong>Accurate Data Capture:</strong> Efficiently capture data
							from sensors, devices, or user interactions.
						</li>
						<li className="dark:text-gray-400">
							<strong>Edge Computing:</strong> Process data closer to the source
							for real-time insights.
						</li>
						<li className="dark:text-gray-400">
							<strong>Data Security:</strong>Robust security measures protect
							data at every stage.
						</li>
					</ul>
				</motion.div>

				{/* Scalable and Flexible Architecture */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Device Integration
					</h2>
					<h4 className="font-semibold text-blue-400">
						Device integration ensures a cohesive ecosystem where all components
						function harmoniously
					</h4>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong>Cross-Device Compatibility:</strong>Solutions work across
							a wide range of devices.
						</li>
						<li className="dark:text-gray-400">
							<strong>Custom Integration Solutions:</strong> Tailored to meet
							unique business needs, integrating legacy systems with new
							technology.
						</li>
						<li className="dark:text-gray-400">
							<strong>IoT and Smart Devices:</strong> Expertise in IoT
							integration creates smarter, more responsive environments.
						</li>
					</ul>
				</motion.div>

				{/* Advanced Testing and Simulation */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						API and Backend Development
					</h2>
					<h4 className="font-semibold text-blue-400">
						Robust backend and API support are essential for optimal platform
						functionality
					</h4>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong>API Development:</strong> Custom APIs facilitate secure
							and scalable communication between mobile apps and backend
							systems.
						</li>
						<li className="dark:text-gray-400">
							<strong>Backend Infrastructure:</strong> Reliable and scalable
							backend solutions support the entire mobility ecosystem. Cloud
							Integration: Leveraging cloud computing for storage, processing,
							and scalability ensures future-proof solutions.
						</li>
					</ul>
				</motion.div>

				{/* Conclusion */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Conclusion
					</h2>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							At Logiicdev, mobility is about creating intelligent, responsive
							systems that enhance connectivity, improve data utilization, and
							ensure seamless integration
						</li>
						<li className="dark:text-gray-400">
							Our solutions are designed to adapt and grow, ensuring long-term
							success in a rapidly evolving technological landscape.
						</li>
					</ul>
				</motion.div>
			</div>
		</div>
	)
}

export default Mobility
