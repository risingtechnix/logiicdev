import React from "react"
import {
	FaBatteryFull,
	FaMicrochip,
	FaProjectDiagram,
	FaBolt,
	FaMicrophone,
	FaCheckCircle,
} from "react-icons/fa"
import {motion} from "framer-motion"

const Advantages = () => {
	const cards = [
		{
			icon: <FaMicrochip size={30} />,
			title: "Simulation",
			description:
				"Logiicdev excels in cell-level, package, co-simulation, signal and power integrity, and analog/mixed-signal block verification.",
		},
		{
			icon: <FaBatteryFull size={40} />,
			title: "AI Battery Management",
			description:
				"Our AI Battery IP provides a real-time virtual environment to test control algorithms without physical prototypes.",
		},
		{
			icon: <FaProjectDiagram size={30} />,
			title: "Project Coordination & Consultancy",
			description:
				"Leveraging deep semiconductor expertise, we help clients accelerate business goals by transforming technical knowledge into practical solutions.",
		},
		{
			icon: <FaBolt size={30} />,
			title: "Hi-Speed Power Electronics",
			description:
				"Our GaN FETs enable faster switching and reduced losses for applications in battery management, fast switching, and load handling.",
		},
		{
			icon: <FaMicrophone size={30} />,
			title: "FPGA & IP",
			description:
				"Logiicdev offers custom FPGA solutions as cost-effective, efficient alternatives to ASICs, minimizing hidden expenses and production delays.",
		},
		{
			icon: <FaCheckCircle size={30} />,
			title: "Verification & Validation",
			description:
				"We ensure optimal hardware performance with advanced testing strategies for mixed signals, high-speed tech, and power modes, preventing costly redesigns.",
		},
	]

	// Motion variant for card animations
	const cardVariants = {
		hidden: {opacity: 0, y: 50},
		visible: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.2,
				duration: 0.5,
			},
		}),
	}
	// bg-gradient-to-br from-[#e0bf3f] to-[#89762e]
	return (
		<section className="bg-[#a159ff0d] text-black py-12 px-4 sm:px-8 md:px-16 lg:px-24">
			<div className="container mx-auto text-center">
				{/* Section Heading */}
				<motion.div
					className="flex flex-col lg:flex-row justify-between items-start mb-10"
					initial={{opacity: 0, y: -50}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}} // Animation triggers only once when in view
					transition={{duration: 0.7}}
				>
					{/* Left Side: Heading */}
					<div className="lg:max-w-xl text-left">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl text-green-500 font-poppins tracking-wide mb-4">
							Here's how we can help you: Advantages.
						</h2>
					</div>

					{/* Right Side: Button and Description */}
					<div className="flex flex-col items-start space-y-4 mt-6 lg:mt-0 lg:ml-4">
						<motion.p
							className="text-green-900 text-base sm:text-lg text-left max-w-xs lg:max-w-sm"
							initial={{opacity: 0}}
							whileInView={{opacity: 1}}
							viewport={{once: true}} // Animation triggers only once when in view
							transition={{duration: 1.0, delay: 0.5}}
						>
							The Benefits of Partnering with Us: Our Competitive Edge and Your
							Success
						</motion.p>

						<button className="flex items-center space-x-2 bg-green-500 hover:bg-white hover:text-[#02b153] hover:border hover:border-[#02b153] text-white font-medium py-2 px-6 rounded-lg">
							<span>Get Started</span>
						</button>
					</div>
				</motion.div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 px-4 md:px-8 lg:px-0">
					{cards.map((card, index) => (
						<motion.div
							key={index}
							className="bg-white text-black p-6 rounded-lg shadow-md h-auto"
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{once: true}} // Trigger animation when card comes into view
							variants={cardVariants}
						>
							<div className="flex flex-col items-start">
								{/* Icon */}
								<div className="text-black bg-transparent p-2 rounded-md">
									{card.icon}
								</div>

								{/* Card Title */}
								<h3 className="text-lg sm:text-xl font-semibold mb-2">
									{card.title}
								</h3>

								{/* Card Description */}
								<p className="text-sm sm:text-base text-start">
									{card.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Advantages
