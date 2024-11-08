import React from "react"
import {
	FaTwitter,
	FaFacebook,
	FaLinkedin,
	FaInstagram,
	FaEnvelope,
	FaPhoneAlt,
} from "react-icons/fa"
import Button from "../Button"
import Button2 from "../Button2"

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-10 px-4">
			<div className="container mx-auto">
				{/* Main Section */}
				<section className="bg-gray-900 py-20 px-6 flex justify-center">
					<div className="bg-gray-800 rounded-lg shadow-lg p-10 text-center max-w-2xl w-full">
						<h1 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
							Simplify work and get more done now.
						</h1>

						<div className="flex justify-center space-x-4 mt-6">
							<button className="flex items-center space-x-2 bg-[#ffcc00] hover:bg-[#1f2937] hover:border hover:border-[#ffcc00] text-black hover:text-white font-medium py-2 px-6 rounded-lg">
								<span>Get Started</span>
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
							<Button2 title={"Take a Tour"} />
						</div>
					</div>
				</section>

				{/* Footer Links */}

				<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{/* Product Section */}
					<div>
						<h5 className="font-bold mb-4">PRODUCT</h5>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:underline">
									Team Boards
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Interactive Reports
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Group Analytics
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Data Integrations
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Security & Privacy
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Integration Directory
								</a>
							</li>
						</ul>
					</div>

					{/* Company Section */}
					<div>
						<h5 className="font-bold mb-4">COMPANY</h5>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:underline">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Pricing
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Press
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Support Section */}
					<div>
						<h5 className="font-bold mb-4">SUPPORT</h5>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:underline">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Developer Docs
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Help Center
								</a>
							</li>
						</ul>
					</div>

					{/* Resources Section */}
					<div>
						<h5 className="font-bold mb-4">RESOURCES</h5>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:underline">
									Product Updates
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Customer Stories
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Testimonials
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									FAQs
								</a>
							</li>
						</ul>
					</div>

					{/* Social Media and Contact Info */}
					<div>
						<h5 className="font-bold mb-4">SOCIAL MEDIA</h5>
						<div className="flex space-x-4 mb-4">
							<a href="#">
								<FaTwitter className="text-xl hover:text-blue-400" />
							</a>
							<a href="#">
								<FaFacebook className="text-xl hover:text-blue-600" />
							</a>
							<a href="#">
								<FaLinkedin className="text-xl hover:text-blue-500" />
							</a>
							<a href="#">
								<FaInstagram className="text-xl hover:text-pink-500" />
							</a>
						</div>
						<div className="space-y-2">
							<div className="flex items-center">
								<FaEnvelope className="mr-2" />
								<a
									href="mailto:contact@macrivate.com"
									className="hover:underline"
								>
									contact@logiicdev.com
								</a>
							</div>
							<div className="flex items-center">
								<FaPhoneAlt className="mr-2" />
								<span>+123 456 789</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
					<p>Copyright © 2024 Logiicdev. All Rights Reserved.</p>
					<div className="space-x-4">
						<a href="#" className="hover:underline">
							Terms of Service
						</a>
						<a href="#" className="hover:underline">
							Privacy Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
