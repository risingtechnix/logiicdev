import React, {useEffect, useState} from "react"
import {motion, useAnimation} from "framer-motion"

const AnimatedCounter = ({targetNumber}) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const incrementTime = 2000 // total time for the animation in ms
		const incrementStep = Math.ceil((targetNumber / incrementTime) * 100)

		let currentCount = 0
		const interval = setInterval(() => {
			currentCount += incrementStep
			if (currentCount >= targetNumber) {
				setCount(targetNumber)
				clearInterval(interval)
			} else {
				setCount(currentCount)
			}
		}, 100) // every 100ms, increment the count

		return () => clearInterval(interval)
	}, [targetNumber])

	return <span>{count}</span>
}

const StatsSection = () => {
	const controls = useAnimation()

	return (
		<section className="relative bg-purple-50 py-12">
			{/* Decorative blue circle */}
			<div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-28 h-28 bg-blue-500 rounded-full"></div>

			{/* Content container */}
			<div className="container mx-auto px-6">
				{/* Heading and Subheading */}
				<div className="text-center space-y-4">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Streamline project management <br /> with the simplest tool
						available
					</h2>
					<p className="text-gray-600">
						Why a straightforward project management tool is the best choice for
						your team
					</p>
				</div>

				{/* Stats Box */}
				<motion.div
					initial={{opacity: 0, y: 50}}
					animate={controls}
					transition={{duration: 0.8}}
					className="mt-8 bg-[#5828E3] text-white rounded-lg py-8 px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
				>
					{/* Stat 1 */}
					<div className="flex flex-col items-center text-center">
						<p className="text-5xl font-bold">
							<AnimatedCounter targetNumber={19} />+
						</p>
						<p className="mt-2 text-lg">Projects completed</p>
					</div>

					{/* Stat Divider */}
					<div className="hidden md:block h-16 w-px bg-white"></div>

					{/* Stat 2 */}
					<div className="flex flex-col items-center text-center">
						<p className="text-5xl font-bold">
							<AnimatedCounter targetNumber={10} />
						</p>
						<p className="mt-2 text-lg">Satisfied Clients</p>
					</div>

					{/* Stat Divider */}
					<div className="hidden md:block h-16 w-px bg-white"></div>

					{/* Stat 3 */}
					<div className="flex flex-col items-center text-center">
						<p className="text-5xl font-bold">
							<AnimatedCounter targetNumber={2} />
						</p>
						<p className="mt-2 text-lg">Winning Awards</p>
						<p className="text-sm mt-1">Including in 2022 - ESA Space award</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default StatsSection
