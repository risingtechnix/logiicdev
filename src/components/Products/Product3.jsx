import React from "react"
import {motion, useInView} from "framer-motion"
import {useRef} from "react"
import InAsLogo from "../../assets/InAsLogo.png"
import InAs from "../../assets/InAs.png"
import InAsProcessor from "../../assets/InAsProcessor.png"
import Automation from "../../assets/LogicDev/Automation.png"
import Industrial from "../../assets/LogicDev/Industrial.png"
import Medical from "../../assets/LogicDev/Medical.png"
import ProcessIndustry from "../../assets/LogicDev/Procees-Industry.png"
import Security from "../../assets/LogicDev/Security.png"
import CallToAction from "../CallToAction"
function Product3() {
	const refe = useRef(null)
	const refe2 = useRef(null)
	const refe3 = useRef(null)
	const refe4 = useRef(null)
	const isInView = useInView(refe, {once: true, amount: 0.2})
	const isInView2 = useInView(refe2, {once: true, amount: 0.2})
	const isInView3 = useInView(refe3, {once: true, amount: 0.2})
	const isInView4 = useInView(refe4, {once: true, amount: 0.2})
	const imageVariants = {
		hidden: {opacity: 0, scale: 0.8},
		visible: {opacity: 1, scale: 1, transition: {duration: 1}},
	}
	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}
	return (
		<section>
			<motion.div
				className="flex flex-col items-center justify-evenly min-h-80 md:min-h-96 bg-gradient-to-br from-[#BEF8FC] via-white to-[#F9EA74] md:py-32 sm:p-10 rounded-lg md:m-10 dark:bg-[#D4F0F0]"
				initial={{opacity: 0, y: -50}} // Initial state
				animate={{opacity: 1, y: 0}} // Animation on mount
				exit={{opacity: 0, y: 50}} // Animation on unmount
				transition={{duration: 0.5}} // Transition timing
			>
				{/* Title Section */}
				<motion.h1
					className="text-3xl leading-relaxed md:mb-14 md:text-6xl font-semibold text-black text-center mb-6 md:leading-relaxed"
					initial={{opacity: 0, scale: 0.9}}
					animate={{opacity: 1, scale: 1}}
					transition={{duration: 0.7, delay: 0.2}}
				>
					Product : Cost Optimized <br /> Scalable SOC Plaform - InAS{" "}
				</motion.h1>
			</motion.div>
			<section className="container mx-auto px-6 py-12">
				<div className="grid md:grid-cols-2 items-center gap-8">
					{/* Image */}
					<motion.div
						className="relative"
						ref={refe}
						initial="hidden"
						animate={isInView2 ? "visible" : "hidden"}
						variants={imageVariants}
					>
						<img
							src={InAsLogo} // Replace with your actual image path
							alt="Team at work"
							className="w-3/4 h-auto mx-auto rounded-lg shadow-lg"
						/>
						{/* Adjusted decorative element */}
						<div className="absolute -bottom-8 -right-[-100px] -z-10 bg-yellow-400 rounded-full w-20 h-20"></div>
					</motion.div>

					{/* Image */}
					<motion.div
						className="relative"
						ref={refe2}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={imageVariants}
					>
						<img
							src={InAs} // Replace with your actual image path
							alt="Team at work"
							className="w-3/4 h-auto mx-auto rounded-lg shadow-lg"
						/>
						{/* Adjusted decorative element */}
						<div className="absolute -bottom-8 -right-[-100px] -z-10 bg-yellow-400 rounded-full w-20 h-20"></div>
					</motion.div>
				</div>
			</section>
			<section className="container mx-auto px-6 py-12">
				<div className="grid md:grid-cols-1 items-center gap-8">
					{/* Text Content */}

					{/* Image */}
					<motion.div
						className="relative"
						ref={refe4}
						initial="hidden"
						animate={isInView4 ? "visible" : "hidden"}
						variants={imageVariants}
					>
						<img
							src={InAsProcessor} // Replace with your actual image path
							alt="Team at work"
							className="w-[442px] h-[640px] mx-auto rounded-lg shadow-lg"
						/>
						{/* Adjusted decorative element */}
					</motion.div>
					<motion.div
						ref={refe3}
						className="space-y-6 pl-4 ml-6"
						initial="hidden"
						animate={isInView3 ? "visible" : "hidden"}
						variants={textVariants}
					>
						<h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white">
							Xilinx® SOC - Zynq™™ 7000 Series Based High Performance, Compact
							SBC for Video Application
						</h2>
						<section className="flex flex-wrap justify-center items-center gap-8 py-8">
							<img
								src={Automation}
								alt="Automation"
								className="w-16 h-16 md:w-20 md:h-20" // Adjust size as needed
							/>

							<img
								src={Industrial}
								alt="Industrial"
								className="w-16 h-16 md:w-20 md:h-20" // Adjust size as needed
							/>

							<img
								src={Medical}
								alt="Medical"
								className="w-16 h-16 md:w-20 md:h-20" // Adjust size as needed
							/>
							<img
								src={ProcessIndustry}
								alt="ProcessIndustry"
								className="w-16 h-16 md:w-20 md:h-20" // Adjust size as needed
							/>
							<img
								src={Security}
								alt="Security"
								className="w-16 h-16 md:w-20 md:h-20" // Adjust size as needed
							/>
						</section>
					</motion.div>
				</div>
			</section>
			<section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 bg-[#fffff7] dark:bg-[#111827] space-y-6 md:space-y-0 md:space-x-12">
				{/* Left Section - Logos */}

				{/* Right Section - Product Details */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						visible: {opacity: 1, transition: {staggerChildren: 0.2}},
						hidden: {opacity: 0},
					}}
					className="text-gray-800 dark:text-white text-center md:text-left"
				>
					<motion.ul className="space-y-2 text-sm md:text-base">
						{[
							"Powered by ARM® Dual-Core Cortex™A9 MP Core",
							"Based on Xilinx’s high-end Zynq XC7Z000 Series All-Programmable SoC",
							"Support Zynq devices XC7Z007 / 10 / 14 / 20 CLG 400 Pin package",
							"87mm x 65mm board size Compact form factor",
							"Available in Production ready with industrial temperature range",
							"Linux BSP, tool chain and Support available",
						].map((detail, index) => (
							<motion.li
								key={index}
								variants={{
									visible: {opacity: 1, y: 0},
									hidden: {opacity: 0, y: 10},
								}}
								transition={{duration: 0.4}}
							>
								• {detail}
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			</section>
			<section className="py-10 px-6 bg-white dark:bg-[#111827]">
				<div className="max-w-4xl mx-auto">
					{/* Animated Heading */}
					<motion.h2
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6, delay: 0.1}}
						className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4"
					>
						InAS Advantages
					</motion.h2>

					{/* Animated List */}
					<motion.ul
						initial="hidden"
						animate="visible"
						variants={{
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.2,
								},
							},
							hidden: {opacity: 0},
						}}
						className="space-y-2 text-gray-800 dark:text-white text-sm md:text-base list-disc pl-5"
					>
						{[
							"Combines Flexibility of SBC with the FPGA configurability",
							"Industrial Grade, Rugged platform to optimize overall BOM cost",
							"On module required power supplies for efficient power management",
							"Linux board support package along with Root file system enables seamless integration",
							"Customized Carrier boards for instant board bring-up and quick prototyping",
						].map((advantage, index) => (
							<motion.li
								key={index}
								variants={{
									visible: {opacity: 1, y: 0},
									hidden: {opacity: 0, y: 10},
								}}
								transition={{duration: 0.4}}
							>
								{advantage}
							</motion.li>
						))}
					</motion.ul>
				</div>
			</section>
			<CallToAction />
		</section>
	)
}

export default Product3
