import React from "react"
import {motion} from "framer-motion"
import BoardWriting from "../../assets/BoardWriting.webp"
import {FaCheck} from "react-icons/fa"
import {Link} from "react-router-dom"

const AboutUs = () => {
	const teamMembers = [
		{
			name: "DARSHNA DK",
			title: "Manager",
			description:
				"My versatility is a valuable asset to understand customers requirements and propose adequate solutions which can not only ease their design but also ease their utilization.",
			imageUrl: "path/to/image1.jpg", // Replace with the actual image path
		},
		{
			name: "DEEPAK V KATKORIA",
			title: "Founder",
			description:
				"My expertise lies in crafting and executing strategies to address complex issues, system planning and rationalization, and effectively managing and motivating teams.",
			imageUrl: "path/to/image2.jpg", // Replace with the actual image path
		},
		{
			name: "THEO H",
			title: "CTO",
			description:
				"Experienced Chief Technology Officer with a demonstrated history of working in the Power semiconductors industry. Skilled in Power electronics, testing and simulation.",
			imageUrl: "path/to/image3.jpg", // Replace with the actual image path
		},
		{
			name: "IAN M",
			title: "Investor",
			description:
				"As a Strategist, Technologist, and Leader, I am deeply passionate about managing and cultivating highly productive and motivated Engineering teams that innovate and develop cutting-edge technical solutions.",
			imageUrl: "path/to/image4.jpg", // Replace with the actual image path
		},
	]

	return (
		<>
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="flex items-center justify-center bg-[#fefff2] dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
			>
				<div className="flex flex-col md:flex-row items-center max-w-7xl w-full space-y-6 md:space-y-0 md:space-x-8">
					{/* Image Section */}
					<motion.div
						initial={{scale: 0.9}}
						animate={{scale: 1}}
						transition={{duration: 0.5}}
						className="w-full md:w-1/2 lg:w-5/12 flex justify-center"
					>
						<img
							src={BoardWriting}
							alt="Person writing on whiteboard"
							className="rounded-lg shadow-lg w-full h-auto object-cover"
						/>
					</motion.div>

					{/* Text Section */}
					<motion.div
						initial={{x: -50, opacity: 0}}
						animate={{x: 0, opacity: 1}}
						transition={{duration: 1}}
						className="w-full md:w-1/2 lg:w-7/12 text-left"
					>
						<h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white">
							Let's push the Horizon together...
						</h2>
						<p className="text-gray-700 dark:text-[#ffffffac] mt-4 text-sm md:text-base lg:text-lg">
							We are continuously seeking partners for research projects. We
							believe that collaborating can lead to enhanced knowledge and
							understanding of technology.
						</p>
						<p className="text-gray-700 dark:text-[#ffffffac] mt-4 text-sm md:text-base lg:text-lg">
							Our areas of interest include Power Electronics, GaN, Battery,
							Digital Twins, AI, Robotics and Autonomous Systems, Smart
							Transportation, HPC, and Cyber Security.
						</p>
						<p className="text-gray-700 dark:text-[#ffffffac] mt-4 text-sm md:text-base lg:text-lg">
							Our team consists of skilled PE, FPGA, software, and firmware
							engineers. Additionally, we offer consulting and third-party
							design services...
						</p>

						{/* Button */}
						<Link to="/contact">
							<motion.button
								whileHover={{scale: 1.05}}
								whileTap={{scale: 0.95}}
								className="mt-6 px-6 py-3 bg-yellow-500 text-black dark:bg-[#f0f8ee] dark:text-[#256867] dark:hover:border-[#256867] font-semibold rounded hover:bg-yellow-600 transition duration-200"
							>
								CHECK WITH US
							</motion.button>
						</Link>
					</motion.div>
				</div>
			</motion.div>
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{delay: 0.5, duration: 1}}
				className="flex items-center justify-center bg-[#fefff2] dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
			>
				<div className="max-w-3xl w-full text-gray-800 dark:text-white">
					{/* Heading */}
					<h2 className="text-2xl md:text-3xl font-semibold">
						We understand the business language very well.
					</h2>

					{/* Subheading */}
					<p className="text-gray-500 italic mt-2">That is:</p>

					{/* List */}
					<ul className="mt-4 space-y-2 text-sm md:text-base">
						{[
							"Understanding the requirement.",
							"Exploring and finalise the agreed path.",
							"Committing only to what can really be delivered.",
							"Client’s trust and IP protection are our top priority.",
							"Long term profit and win-win partnership.",
							"Any decision should be made openly with choice…not with pressure.",
						].map((text, index) => (
							<motion.li
								key={index}
								initial={{opacity: 0, x: -20}}
								animate={{opacity: 1, x: 0}}
								transition={{delay: index * 0.2, duration: 0.5}}
								className="flex items-start space-x-2"
							>
								<FaCheck className="text-green-500 mt-1" />
								<span>{text}</span>
							</motion.li>
						))}
					</ul>
				</div>
			</motion.div>
			<motion.section
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="py-12 bg-gray-100 dark:bg-[#181c32]"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
						OUR TEAM
					</h2>
					<p className="text-center text-gray-600 dark:text-[#ffffffac] mb-12">
						Bonding through dialog and empathy
					</p>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{teamMembers.map((member, index) => (
							<motion.div
								key={index}
								whileHover={{scale: 1.05}}
								className="text-center bg-white dark:bg-[#d4f0f0] p-4 shadow-md rounded-lg"
							>
								<img
									src={member.imageUrl}
									alt={member.name}
									className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
								/>
								<h3 className="text-lg font-semibold">{member.name}</h3>
								<p className="text-sm text-gray-500 mb-2">{member.title}</p>
								<p className="text-sm text-gray-700">{member.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>
		</>
	)
}

export default AboutUs
