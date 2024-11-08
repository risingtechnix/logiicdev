import React from "react"

const CallToAction = () => {
	return (
		<section className="relative flex flex-col items-center text-center py-16 bg-white">
			{/* Decorative Shapes */}
			<div className="absolute left-12 top-1/2 transform -translate-y-1/2 w-14 h-16 bg-green-500 rounded-tl-full rounded-bl-full "></div>
			<div className="absolute right-12 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-yellow-500 rotate-45"></div>

			{/* Main Content */}
			<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-4">
				Bring your customer service to the next level of excellence
			</h2>
			<p className="text-gray-600 max-w-lg mx-auto mb-8">
				Take your customer service to the next level by incorporating innovative
				technologies and personalized solutions
			</p>

			{/* Button */}
			<button className="flex items-center px-6 py-3 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 transition">
				Explore Now
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-5 h-5 ml-2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>
		</section>
	)
}

export default CallToAction
