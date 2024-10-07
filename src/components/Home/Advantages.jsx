import React from "react"
import Slider from "react-slick"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

const CustomNextArrow = (props) => {
	const {className, style, onClick} = props
	return (
		<div
			className={`${className} bg-purple-600 hover:bg-purple-800 rounded-full shadow-lg p-2 cursor-pointer z-10`}
			style={{...style, display: "block", right: "15px"}}
			onClick={onClick}
		>
			<FaChevronRight className="text-white" />
		</div>
	)
}

const CustomPrevArrow = (props) => {
	const {className, style, onClick} = props
	return (
		<div
			className={`${className} bg-purple-600 hover:bg-purple-800 rounded-full shadow-lg p-2 cursor-pointer z-10`}
			style={{...style, display: "block", left: "15px"}}
			onClick={onClick}
		>
			<FaChevronLeft className="text-white" />
		</div>
	)
}

const Advantages = () => {
	const settings = {
		dots: true, // Enable dots navigation
		infinite: true, // Make the carousel infinite
		speed: 500, // Transition speed
		slidesToShow: 2, // Show 2 cards at a time
		slidesToScroll: 2, // Scroll 2 cards at a time
		autoplay: true, // Enable autoplay
		autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
		arrows: true, // Enable arrows for navigation
		nextArrow: <CustomNextArrow />, // Custom next arrow
		prevArrow: <CustomPrevArrow />, // Custom prev arrow
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2, // Show 2 cards at a time for screens above 1024px
					slidesToScroll: 2, // Scroll 2 cards at a time
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1, // Show 1 card at a time for smaller screens
					slidesToScroll: 1, // Scroll 1 card at a time
				},
			},
		],
	}

	return (
		<section className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-16 px-8 sm:px-16 overflow-hidden">
			<div className="container mx-auto text-center mb-10">
				<h2 className="text-3xl sm:text-4xl font-bold mb-6">
					Here's how we can help you: advantages.
				</h2>
				<p className="max-w-xl mx-auto text-gray-400">
					The Benefits of Partnering with Us: Our Competitive Edge and Your
					Success.
				</p>
				<button className="mt-6 bg-white text-purple-900 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-300 transition duration-200">
					Get Started
				</button>
			</div>

			{/* Carousel for Advantages */}
			<div className="container mx-auto px-4 sm:px-0">
				<Slider {...settings}>
					{/* Card 1 */}
					<div className="p-4">
						<div className="bg-purple-600 p-6 rounded-lg shadow-md">
							<div className="text-white mb-4">Simulation</div>
							<p className="text-gray-200">
								Logiicdev excels in cell-level, package, co-simulation, signal
								and power integrity, and analog/mixed-signal block verification.
							</p>
						</div>
					</div>

					{/* Card 2 */}
					<div className="p-4">
						<div className="bg-purple-600 p-6 rounded-lg shadow-md">
							<div className="text-white mb-4">AI Battery Management</div>
							<p className="text-gray-200">
								Our AI Battery HIL provides a real-time virtual environment to
								test control algorithms without physical prototypes.
							</p>
						</div>
					</div>

					{/* Card 3 */}
					<div className="p-4">
						<div className="bg-purple-600 p-6 rounded-lg shadow-md">
							<div className="text-white mb-4">
								Project Coordination & Consultancy
							</div>
							<p className="text-gray-200">
								Leveraging deep semiconductor expertise, we help clients
								accelerate business goals by transforming technical knowledge
								into practical solutions.
							</p>
						</div>
					</div>

					{/* Card 4 */}
					<div className="p-4">
						<div className="bg-purple-600 p-6 rounded-lg shadow-md">
							<div className="text-white mb-4">Hi-Speed Power Electronics</div>
							<p className="text-gray-200">
								Our GaN FETs enable faster switching and reduced losses for
								applications in battery management, fast switching, and load
								handling.
							</p>
						</div>
					</div>

					{/* Card 5 */}
					<div className="p-4">
						<div className="bg-purple-600 p-6 rounded-lg shadow-md">
							<div className="text-white mb-4">FPGA & IP</div>
							<p className="text-gray-200">
								Logiicdev offers custom FPGA solutions as cost-effective,
								efficient alternatives to ASICs, minimizing hidden expenses and
								production delays.
							</p>
						</div>
					</div>

					{/* Card 6 */}
					<div className="p-4">
						<div className="bg-purple-600 p-6 rounded-lg shadow-md">
							<div className="text-white mb-4">Verification & Validation</div>
							<p className="text-gray-200">
								We ensure optimal hardware performance with advanced testing
								strategies for mixed signals, high-speed tech, and power modes,
								preventing costly redesigns.
							</p>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	)
}

export default Advantages
