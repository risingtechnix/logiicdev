import React, {useState} from "react"
import {motion, useAnimation} from "framer-motion"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

const AnimatedCounter = ({targetNumber}) => {
	const [countOn, setCountOn] = useState(false)

	return (
		<ScrollTrigger
			onEnter={() => setCountOn(true)}
			onExit={() => setCountOn(false)}
		>
			<CountUp
				start={0}
				end={countOn ? targetNumber : 0}
				duration={2}
				delay={0}
			/>
		</ScrollTrigger>
	)
}

const StatsSection = () => {
	const controls = useAnimation()

	return (
		<section className="relative py-12 bg-[#FEFFF2] dark:bg-[#111827]">
			{/* Content container */}
			<div className="container mx-auto px-6">
				{/* Heading and Subheading */}
				<div className="text-center space-y-4">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
						Streamline project management <br className="hidden sm:block" />{" "}
						with the simplest tool available
					</h2>
					<p className="text-gray-600 text-sm sm:text-base dark:text-gray-400">
						Why a straightforward project management tool is the best choice for
						your team
					</p>
				</div>

				{/* Stats Box */}
				<div className="bg-[#F3FB6E] dark:bg-[#d4f0f0]  text-black rounded-lg p-6 sm:p-8 flex flex-col md:flex-row justify-around items-center mx-4 mt-8 ">
					<div className="text-center mb-6 md:mb-0">
						<h2 className="text-3xl sm:text-4xl font-bold flex justify-center">
							<AnimatedCounter targetNumber={19} /> <span>+</span>
						</h2>
						<p className="text-sm sm:text-base mt-2">Projects completed</p>
					</div>
					<div className="hidden md:block border-l border-black h-12 mx-6"></div>
					<div className="text-center mb-6 md:mb-0">
						<h2 className="text-3xl sm:text-4xl font-bold">
							<AnimatedCounter targetNumber={10} />
						</h2>
						<p className="text-sm sm:text-base mt-2">Satisfied Clients</p>
					</div>
					<div className="hidden md:block border-l border-black h-12 mx-6"></div>
					<div className="text-center">
						<h2 className="text-3xl sm:text-4xl font-bold">
							<AnimatedCounter targetNumber={2} />
						</h2>
						<p className="text-sm sm:text-base mt-2">
							Winning Awards
							<br />
							Including in 2022 - ESA Space award
						</p>
					</div>
					<div className="hidden md:block border-l border-black h-12 mx-6"></div>
					<div className="text-center mb-6 md:mb-0">
						<h2 className="text-3xl sm:text-4xl font-bold flex justify-center">
							<AnimatedCounter targetNumber={190} /> <span>+</span>
						</h2>
						<p className="text-sm sm:text-base mt-2">Followers</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default StatsSection
